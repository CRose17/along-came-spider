import k from "../src/kaboom";

export default function Win() {
  k.add([
    k.text("You Win!", 32),
    k.pos(k.width() / 2, k.height() / 2),
    k.color(1, 1, 1, 1),
    k.origin("top")
  ]);
}
