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

  // await t
  //   .expect(elementLocation.left)
  //   .eql(100, "Element not at correct location");
  // await t
  //   .expect(elementLocation.top)
  //   .eql(200, "Element not at correct location");
});
