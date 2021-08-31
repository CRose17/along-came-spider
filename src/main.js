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
    k.pos(195, 490),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([k.text("Play game", 16), k.pos(200, 500), k.color(0, 0, 0)]);

  k.add([
    k.rect(250, 30),
    k.pos(510, 490),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("<- arrow = move left", 12),
    k.pos(520, 500),
    k.color(0, 0, 0)
  ]);
  k.add([
    k.rect(260, 30),
    k.pos(510, 530),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("-> arrow = move right", 12),
    k.pos(515, 540),
    k.color(0, 0, 0)
  ]);
  k.add([
    k.rect(250, 30),
    k.pos(510, 570),
    "button",
    { clickAction: () => k.go("game") }
  ]);
  k.add([
    k.text("spacebar = shoot web", 12),
    k.pos(515, 580),
    k.color(0, 0, 0)
  ]);

  k.action("button", (b) => {
    if (b.isHovered()) b.use(k.color(0.7, 0.7, 0.7));
    else b.use(k.color(1, 1, 1));
    if (b.isClicked()) b.clickAction();
  });
});

k.start("main");
