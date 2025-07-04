defmodule KinoReactExample.Counter do
  use Kino.JS, assets_path: "lib/assets/counter/build"
  use Kino.JS.Live

  def new() do
    Kino.JS.Live.new(__MODULE__, {})
  end

  @impl true
  def init({}, ctx) do
    {:ok, assign(ctx, count: 0)}
  end

  @impl true
  def handle_connect(ctx) do
    payload = %{count: ctx.assigns.count}
    {:ok, payload, ctx}
  end

  @impl true
  def handle_event("bump_count", _params, ctx) do
    count = ctx.assigns.count + 1
    broadcast_event(ctx, "count_updated", %{count: count})
    {:noreply, assign(ctx, count: count)}
  end
end
