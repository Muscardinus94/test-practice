import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";
import fetchTodos from "@/lib/fetchTodos/fetchTodos";

describe("fetchTodos lib function", () => {
  it("should return the correct number of todo items", async () => {
    const todosArray = await fetchTodos();
    expect(todosArray.length).toBe(4);
  });

  it("should return an empty array with an error", async () => {
    // intercept를 해서 error를 반환한다
    await server.use(
      http.get("/todos", () => {
        return HttpResponse.error();
      })
    );

    const todosArray = await fetchTodos();
    expect(todosArray.length).toBe(0);
  });
});
