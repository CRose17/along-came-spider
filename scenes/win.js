import k from "../src/kaboom";
import Game from "./game";

k.scene("game", Game);

export default function Win() {
  k.add([
    k.text("You Win!", 32),
    k.pos(k.width() / 2, k.height() / 2),
    k.color(1, 1, 1, 1),
    k.origin("top")
  ]);
  k.add([
    k.rect(185, 40),
    k.pos(375, 490),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([k.text("Play again?", 16), k.pos(380, 500), k.color(0, 0, 0)]);

  k.action("button", (b) => {
    if (b.isHovered()) b.use(k.color(0.7, 0.7, 0.7));
    else b.use(k.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
}
