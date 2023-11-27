import updateTodo from "../updateTodo";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

const mockTodo = {
  userId: 1,
  title: "Wave hello! 👋",
  completed: false,
  id: 1,
};

describe("updateTodo lib function", () => {
  it("should return the updated todo item", async () => {
    const updatedTodo = await updateTodo(mockTodo);
    expect(updatedTodo).toEqual({
      userId: 1,
      title: "Wave hello! 👋",
      completed: true,
      id: 1,
    });
  });

  it("should fail with an error", async () => {
    server.use(
      http.put("/todos/1", () => {
        return HttpResponse.json(null, { status: 401 });
      })
    );
    expect.assertions(1);
    try {
      await updateTodo(mockTodo);
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toEqual("Failed to update todo");
      }
    }
  });
});
