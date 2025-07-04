defmodule KinoReactExampleTest do
  use ExUnit.Case
  doctest KinoReactExample

  test "greets the world" do
    assert KinoReactExample.hello() == :world
  end
end
