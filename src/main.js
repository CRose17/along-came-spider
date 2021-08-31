import k from "./kaboom";
import Game from "../scenes/game";

k.scene("game", Game);

k.scene("main", () => {
  k.add([
    k.text("Along Came A Spider", 32),
    k.pos(k.width() / 2, k.height() / 2),
    k.color(1, 1, 1, 1),
    k.origin("top")
  ]);
  k.add([
    k.rect(155, 40),
    k.pos(k.width() / 2 - 200, k.height() / 2 + 100),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("Play game", 16),
    k.pos(k.width() / 2 - 195, k.height() / 2 + 110),
    k.color(0, 0, 0)
  ]);

  k.add([
    k.rect(250, 30),
    k.pos(k.width() / 2 + 50, k.height() / 2 + 100),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("<- arrow = move left", 12),
    k.pos(k.width() / 2 + 55, k.height() / 2 + 110),
    k.color(0, 0, 0)
  ]);
  k.add([
    k.rect(260, 30),
    k.pos(k.width() / 2 + 50, k.height() / 2 + 140),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("-> arrow = move right", 12),
    k.pos(k.width() / 2 + 55, k.height() / 2 + 150),
    k.color(0, 0, 0)
  ]);
  k.add([
    k.rect(250, 30),
    k.pos(k.width() / 2 + 50, k.height() / 2 + 180),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("spacebar = shoot web", 12),
    k.pos(k.width() / 2 + 55, k.height() / 2 + 190),
    k.color(0, 0, 0)
  ]);

  k.action("button", (b) => {
    if (b.isHovered()) b.use(k.color(0.7, 0.7, 0.7));
    else b.use(k.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
});

k.start("main");
