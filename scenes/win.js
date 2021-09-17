import k from "../src/kaboom";
import Game from "./game";
import Main from "../src/main";

k.scene("game", Game);
k.scene("main", Main);

export default function Win() {
  k.add([
    k.text("You Win!\n" + "score:" + score, 32),
    k.pos(k.width() / 2, k.height() / 2),
    k.color(1, 1, 1, 1),
    k.origin("top")
  ]);
  k.add([
    k.rect(185, 40),
    k.pos(k.width() / 2 - 90, k.height() / 2 + 80),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("Play again?", 16),
    k.pos(k.width() / 2 - 85, k.height() / 2 + 90),
    k.color(0, 0, 0)
  ]);

  k.action("button", (b) => {
    if (b.isHovered()) b.use(k.color(0.7, 0.7, 0.7));
    else b.use(k.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
  k.add([
    k.rect(185, 40),
    k.pos(k.width() / 2 - 90, k.height() / 2 + 120),
    "button",
    { clickAction: () => k.go("main") }
  ]);
  k.add([
    k.text("Back to Main Menu", 16),
    k.pos(k.width() / 2 - 85, k.height() / 2 + 130),
    k.color(0, 0, 0)
  ]);

  k.action("button", (b) => {
    if (b.isHovered()) b.use(k.color(0.7, 0.7, 0.7));
    else b.use(k.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
}
