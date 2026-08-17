export default {
  name: "lifecycle-test",
  inject: ["taskPlugins"],
  apply(ctx) {
    return ctx.taskPlugins.register({
      name: "lifecycle-test",
      routes: [{ type: "lifecycle.echo", priority: 100 }],
    }, async (task) => ({
      metrics: { version: "v1", ok: true },
      data: { echo: String(task.input.message || ""), marker: "real-github-lifecycle-test" },
    }));
  },
};
