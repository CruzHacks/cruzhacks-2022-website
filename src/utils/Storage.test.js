import { retrieve, store } from "./Storage"

afterEach(() => {
  window.sessionStorage.clear()
});

describe("Testing storage functions", () => {
  test("retrieve unknown value with and without default", () => {
    expect(retrieve("test_key")).toBeUndefined()
    expect(retrieve("test_key", "default_value")).toEqual("default_value")
  });

  test("store and retrieve value with no timeout", () => {
    store("test_key", "test_value")
    expect(retrieve("test_key", "default_value")).toEqual("test_value")
  });
  test("store and retrieve value with timeout", async () => {
    store("test_key", "test_value", 1)

    // retrieve before timeout should work
    expect(retrieve("test_key")).toEqual("test_value")

    // value should have been expired after 1.5 seconds
    await new Promise(e => setTimeout(e, 1500));
    expect(retrieve("test_key")).toBeUndefined()
  });

  test("store and retrieve value associated with a user", async () => {
    store("test_key", "test_value", undefined, "test_user")
    expect(retrieve("test_key", undefined, "test_user")).toEqual("test_value")
    expect(retrieve("test_key", undefined, "another_user")).toBeUndefined()
  });

});
