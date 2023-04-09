import { ClientFunction } from "testcafe";
import pages from "./pages";

fixture("contact page test").page("http://localhost:3000/contact");

test("My Test", async (t) => {
  await t.expect(pages.contactButton.exists).ok();

  // Check if element is at correct location
  const getLocation = ClientFunction(() => {
    const el = document.querySelector("#contact-btn");
    const { x, y } = el.getBoundingClientRect();
    return { x, y };
  });

  const location = await getLocation();

  await t.expect(location.x).eql(0)
  // .expect(location.y).eql(200);


  // Type text into the text area
  await t.typeText(pages.textArea, 'Hello, world!');

  // Assert that the text area contains the expected value
  await t.expect(pages.textArea.value).eql('Hello, world!');

  await t
  .expect(pages.contactButton.exists)
  .ok()
  .click(pages.contactButton)
  .expect(pages.alertDiv.exists)
  .ok()
  .expect(pages.alertDiv.textContent)
  .eql('hello world');
});
