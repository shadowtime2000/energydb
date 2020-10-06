import { Rhum } from "https://deno.land/x/rhum@v1.1.2/mod.ts";

import EnergyDB from "../../mod.ts";
import SQLiteAdapter from "./sqlite.ts";

const energyDB = new EnergyDB();

Rhum.testPlan("#SQLiteAdapter", () => {
  Rhum.testSuite(".registerAdapter()", () => {
    Rhum.testCase("should not throw errors", async () => {
      await energyDB.registerAdapter(new SQLiteAdapter());
    });
  });
  Rhum.testSuite(".on('set')", () => {
    Rhum.testCase("should not throw errors", async () => {
      await energyDB.set("foo", "bar");
    });
    Rhum.testCase("set value should exist", async () => {
      Rhum.asserts.assertEquals(await energyDB.get("foo"), "bar");
    });
  });
});

Rhum.run();