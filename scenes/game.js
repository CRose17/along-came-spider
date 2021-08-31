import k from "../src/kaboom";
import Win from "./win";
import Lose from "./lose";

k.scene("lose", Lose);
k.scene("win", Win);

k.loadRoot("https://i.imgur.com/");
k.loadSprite("spider", "aTxTD53.png");
k.loadSprite("fly1", "7FtRXwP.png");
k.loadSprite("fly2", "7FtRXwP.png");
k.loadSprite("fly3", "7FtRXwP.png");
k.loadSprite("bolt", "0PndioM.png");
k.loadSprite("web", "6iE2HD3.png?1");
k.loadSprite("wall", "7JzKe7Xs.png");
k.loadSprite("ground", "8hfkcDUs.png");

const block_size = 20;

const MOVE_SPEED = 200;
const WEB_SPEED = 300;
const FLY1_SPEED = 50;
const FLY2_SPEED = 170;
const FLY3_SPEED = 100;
const TIME_LEFT = 30;

k.layers(["bg", "obj", "ui"], "obj");

export default function Game() {
  k.addLevel(
    [
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     w                            h",
      "     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ],
    {
      width: block_size,
      height: block_size,
      pos: (0, 0),
      w: [k.sprite("wall"), "left-wall", k.solid(), k.scale(0.5)],
      h: [k.sprite("wall"), "right-wall", k.solid(), k.scale(0.5)],
      x: [k.sprite("ground"), "ground", k.solid(), k.scale(0.5)],
      b: [k.sprite("bolt"), k.solid()]
    }
  );

  const score = k.add([
    k.text("0"),
    k.pos(40, 40),
    k.layer("ui"),
    k.scale(2.5),
    {
      value: 0
    }
  ]);

  const timer = k.add([
    k.text("0"),
    k.pos(20, 150),
    k.scale(2),
    k.layer("ui"),
    {
      time: TIME_LEFT
    }
  ]);

  timer.action(() => {
    timer.time -= k.dt();
    timer.text = timer.time.toFixed(2);
    if (timer.time <= 0) {
      k.go("lose", { score: score.value });
    } else if (score.value === 10) {
      k.go("win", { score: score.value });
    }
  });

  const spider = k.add([
    k.sprite("spider"),
    k.pos(k.width() / 2, k.height() / 2 - 270)
  ]);

  k.keyDown("right", () => {
    spider.move(MOVE_SPEED, 0);
  });
  k.keyDown("left", () => {
    spider.move(-MOVE_SPEED, 0);
  });

  function respawn_all() {
    k.run_loop = false;
    k.wait(0.5, function () {
      respawn_fly1();
      respawn_fly2();
      respawn_fly3();
      k.run_loop = true;
    });
  }
  respawn_all();

  let fly1 = null;
  let CURRENT1_SPEED = FLY1_SPEED;

  function respawn_fly1() {
    let new_pos = k.rand(k.vec2(200, 100), k.vec2(700, 400));
    new_pos.x = Math.floor(new_pos.x);
    new_pos.y = Math.floor(new_pos.y);

    if (fly1) {
      k.destroy(fly1);
    }
    fly1 = k.add([k.sprite("fly1"), k.pos(new_pos), "fly1"]);
  }

  k.action("fly1", (s) => {
    s.move(CURRENT1_SPEED, 0);
  });

  k.collides("fly1", "right-wall", () => {
    CURRENT1_SPEED = -FLY1_SPEED;
    k.every("fly1", (s) => {
      s.move(0, 0);
    });
  });

  k.collides("fly1", "left-wall", () => {
    CURRENT1_SPEED = FLY1_SPEED;
    k.every("fly1", (s) => {
      s.move(0, 0);
    });
  });

  let fly2 = null;
  let CURRENT2_SPEED = FLY2_SPEED;

  function respawn_fly2() {
    let new_pos = k.rand(k.vec2(200, 100), k.vec2(700, 400));
    new_pos.x = Math.floor(new_pos.x);
    new_pos.y = Math.floor(new_pos.y);

    if (fly2) {
      k.destroy(fly2);
    }
    fly2 = k.add([k.sprite("fly2"), k.pos(new_pos), "fly2"]);
  }

  k.action("fly2", (s) => {
    s.move(CURRENT2_SPEED, 0);
  });

  k.collides("fly2", "right-wall", () => {
    CURRENT2_SPEED = -FLY2_SPEED;
    k.every("fly2", (s) => {
      s.move(0, 0);
    });
  });

  k.collides("fly2", "left-wall", () => {
    CURRENT2_SPEED = FLY2_SPEED;
    k.every("fly2", (s) => {
      s.move(0, 0);
    });
  });

  let fly3 = null;
  let CURRENT3_SPEED = FLY3_SPEED;

  function respawn_fly3() {
    let new_pos = k.rand(k.vec2(200, 100), k.vec2(700, 400));
    new_pos.x = Math.floor(new_pos.x);
    new_pos.y = Math.floor(new_pos.y);

    if (fly3) {
      k.destroy(fly3);
    }
    fly3 = k.add([k.sprite("fly3"), k.pos(new_pos), "fly3"]);
  }

  k.action("fly3", (s) => {
    s.move(CURRENT3_SPEED, 0);
  });

  k.collides("fly3", "right-wall", () => {
    CURRENT3_SPEED = -FLY3_SPEED;
    k.every("fly3", (s) => {
      s.move(0, 0);
    });
  });

  k.collides("fly3", "left-wall", () => {
    CURRENT3_SPEED = FLY3_SPEED;
    k.every("fly3", (s) => {
      s.move(0, 0);
    });
  });

  function spawnWeb(p) {
    k.add([k.sprite("web"), k.pos(p), k.origin("center"), "webHit"]);
  }

  k.keyPress("space", () => {
    spawnWeb(spider.pos.add(30, 60));
  });

  k.action("webHit", (b) => {
    b.move(0, WEB_SPEED);
  });

  k.collides("webHit", "ground", (b) => {
    k.destroy(b);
  });

  k.collides("webHit", "fly1", (b, s) => {
    k.camShake(4);
    k.destroy(b);
    respawn_fly1();
    k.destroy(s);
    score.value++;
    score.text = score.value;
  });

  k.collides("webHit", "fly2", (b, s) => {
    k.camShake(4);
    k.destroy(b);
    respawn_fly2();
    k.destroy(s);
    score.value++;
    score.text = score.value;
  });

  k.collides("webHit", "fly3", (b, s) => {
    k.camShake(4);
    k.destroy(b);
    respawn_fly3();
    k.destroy(s);
    score.value++;
    score.text = score.value;
  });

  k.add([
    k.rect(310, 30),
    k.pos(k.width() / 2 - 100, k.height() / 2 + 240),
    k.color(0, 0, 0)
  ]);
  k.add([
    k.text("Capture 10 flies and WIN!", 12),
    k.pos(k.width() / 2 - 95, k.height() / 2 + 250),
    k.color(1, 1, 1)
  ]);
}
