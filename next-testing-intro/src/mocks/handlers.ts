import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/todos", () => {
    return HttpResponse.json(
      [
        {
          userId: 1,
          title: "Wave hello! 👋",
          completed: false,
          id: 1,
        },
        {
          userId: 1,
          title: "Get Coffee ☕☕☕",
          completed: false,
          id: 2,
        },
        {
          userId: 1,
          title: "Go to Work ⚒",
          completed: false,
          id: 3,
        },
        {
          userId: 1,
          title: "Write Code 💻",
          completed: false,
          id: 4,
        },
      ],
      { status: 200 }
    );
  }),
  http.post("/todos", async ({ request }) => {
    const req = await request.json();
    const { title } = req;
    return HttpResponse.json(
      { userId: 1, title, completed: false, id: 5 },
      { status: 201 }
    );
  }),
  http.put("/todos/:id", async ({ request }) => {
    const { id, userId, title, completed } = await request.json();

    return HttpResponse.json({ userId, title, completed, id }, { status: 200 });
  }),
  http.delete("/todos/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({ id: Number(id) }, { status: 200 });
  }),
];
