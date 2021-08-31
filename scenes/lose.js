import k from "../src/kaboom";
import Game from "./game";

k.scene("game", Game);

export default function Lose() {
  k.add([
    k.text("So close", 32),
    k.pos(k.width() / 2, k.height() / 2),
    k.color(1, 1, 1, 1),
    k.origin("top")
  ]);
  k.add([
    k.rect(165, 40),
    k.pos(400, 490),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([k.text("Try again!", 16), k.pos(405, 500), k.color(0, 0, 0)]);

  k.action("button", (b) => {
    if (b.isHovered()) b.use(k.color(0.7, 0.7, 0.7));
    else b.use(k.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
}
