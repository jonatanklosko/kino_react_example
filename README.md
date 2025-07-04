# KinoReactExample

Example of an interactive [Kino](https://github.com/livebook-dev/kino) component implemented using React.

Generated with `mix new kino_react_example`, see the second commit for all changes implementing the component.

How to use:

1. In Livebook, install the local package:

   ```elixir
   Mix.install([
     {:kino_react_example, path: "~/path/to/kino_react_example"}
   ])
   ```

2. Create the component in a new cell:

   ```elixir
   KinoReactExample.Counter.new()
   ```

3. Whenever you make changes to `assets/`, run `npm run build` in the assets directory. To see the changes take effect, restart notebook runtime and evaluate again (shortcuts: `00` + `cmd + shift + enter`).

   > Hint: to avoid running `npm run build` every time, you can start `npm run dev` in a separate terminal, which will rebuild on any assets change. It will also build in dev mode, with source maps and dev warnings.
