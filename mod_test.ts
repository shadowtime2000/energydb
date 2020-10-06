import { Rhum } from "https://deno.land/x/rhum@v1.1.2/mod.ts";

import EnergyDB from "./mod.ts";

const energyDB = new EnergyDB();

Rhum.testPlan("#EnergyDB", () => {
  Rhum.testSuite(".set()", () => {
    Rhum.testCase("should not throw errors", () => {
      energyDB.set("foo", "bar");
    });
  });
  Rhum.testSuite(".get()", () => {
    Rhum.testCase("should return 'bar'", async () => {
      Rhum.asserts.assertEquals(await energyDB.get("foo"), "bar");
    });
  });
  Rhum.testSuite(".delete()", () => {
    Rhum.testCase("should delete 'foo'", async () => {
      await energyDB.delete("foo");
      Rhum.asserts.assertEquals(await energyDB.get("foo"), undefined);
    });
  });
});

Rhum.run();
