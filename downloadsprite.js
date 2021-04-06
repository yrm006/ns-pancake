import { fix0 } from "https://js.sabae.cc/fix0.js";

const spr = [
    { fn: "./image/sprite/boyclap.1.png", no: 0x00 },
    { fn: "./image/sprite/boyjamp.1.png", no: 0x01 },
    { fn: "./image/sprite/boylwalk.1.png", no: 0x02 },
    { fn: "./image/sprite/boyrstand.1.png", no: 0x03 },
    { fn: "./image/sprite/boyrwalk.1.png", no: 0x04 },
    { fn: "./image/sprite/boysquat.1.png", no: 0x05 },
    { fn: "./image/sprite/boystand.png", no: 0x06 },
    { fn: "./image/sprite/girlclap.1.png", no: 0x07 },
    { fn: "./image/sprite/girljamp.1.png", no: 0x08 },
    { fn: "./image/sprite/girljoy.1.png", no: 0x09 },
    { fn: "./image/sprite/girlrstand.1.png", no: 0x0a },
    { fn: "./image/sprite/girlrwalk.1.png", no: 0x0b },
    { fn: "./image/sprite/girlsquat.1.png", no: 0x0c },
    { fn: "./image/sprite/girlstand.1.png", no: 0x0d },
    { fn: "./image/sprite/bicycle.8.png", no: 0x0e },
    { fn: "./image/sprite/carsmall.8.png", no: 0x0f },

    { fn: "./image/sprite/cartop.8.png", no: 0x10 },
    { fn: "./image/sprite/bus.8.png", no: 0x11 },
    { fn: "./image/sprite/track.8.png", no: 0x12 },
    { fn: "./image/sprite/ambulance.8.png", no: 0x13 },
    { fn: "./image/sprite/fireengine.8.png", no: 0x14 },
    { fn: "./image/sprite/Excavator.8.png", no: 0x15 },
    { fn: "./image/sprite/bulldozer.8.png", no: 0x16 },
    { fn: "./image/sprite/boat.0.png", no: 0x17 },
    { fn: "./image/sprite/ship.0.png", no: 0x18 },
    { fn: "./image/sprite/submarine.0.png", no: 0x19 },
    { fn: "./image/sprite/copterr.a.png", no: 0x1a },
    { fn: "./image/sprite/plane.a.png", no: 0x1b },
    { fn: "./image/sprite/rocket.0.png", no: 0x1c },
    { fn: "./image/sprite/ufo.0.png", no: 0x1d },
    { fn: "./image/sprite/ichigo.1.png", no: 0x1e },
    { fn: "./image/sprite/apple.0.png", no: 0x1f },

    { fn: "./image/sprite/omusubi.f.png", no: 0x20 },
    { fn: "./image/sprite/meat.0.png", no: 0x21 },
    { fn: "./image/sprite/danbun.f.png", no: 0x22 },
    { fn: "./image/sprite/turtle.0.png", no: 0x23 },
    { fn: "./image/sprite/cat.0.png", no: 0x24 },
    { fn: "./image/sprite/dog.0.png", no: 0x25 },
    { fn: "./image/sprite/elephant.0.png", no: 0x26 },
    { fn: "./image/sprite/fox.0.png", no: 0x27 },
    { fn: "./image/sprite/giraffe.0.png", no: 0x28 },
    { fn: "./image/sprite/rabbit.0.png", no: 0x29 },
    { fn: "./image/sprite/horse.0.png", no: 0x2a },
    { fn: "./image/sprite/lion.0.png", no: 0x2b },
    { fn: "./image/sprite/penguin.0.png", no: 0x2c },
    { fn: "./image/sprite/birdup.a.png", no: 0x2d },
    { fn: "./image/sprite/birddown.a.png", no: 0x2e },
    { fn: "./image/sprite/fish.b.png", no: 0x2f },

    { fn: "./image/sprite/jellyfish.b.png", no: 0x30 },
    { fn: "./image/sprite/urchin.b.png", no: 0x31 },
    { fn: "./image/sprite/sword.0.png", no: 0x32 },
    { fn: "./image/sprite/shield.0.png", no: 0x33 },
    { fn: "./image/sprite/cane.0.png", no: 0x34 },
    { fn: "./image/sprite/coin.0.png", no: 0x35 },
    { fn: "./image/sprite/jemblue.0.png", no: 0x36 },
    { fn: "./image/sprite/jemgreen.0.png", no: 0x37 },
    { fn: "./image/sprite/jempurple.0.png", no: 0x38 },
    { fn: "./image/sprite/jemred.0.png", no: 0x39 },
    { fn: "./image/sprite/jemyellow.0.png", no: 0x3a },
    { fn: "./image/sprite/key.0.png", no: 0x3b },
    { fn: "./image/sprite/treasure.9.png", no: 0x3c },
    { fn: "./image/sprite/treasure1.9.png", no: 0x3d },
    { fn: "./image/sprite/skull.f.png", no: 0x3e },
    { fn: "./image/sprite/fire.0.png", no: 0x3f },

    { fn: "./image/sprite/firea.0.png", no: 0x40 },
    { fn: "./image/sprite/fireb.0.png", no: 0x41 },
    { fn: "./image/sprite/clock.0.png", no: 0x42 },
    { fn: "./image/sprite/stopwatch.8.png", no: 0x43 },
    { fn: "./image/sprite/ladder.0.png", no: 0x44 },
    { fn: "./image/sprite/heart.0.png", no: 0x45 },
    { fn: "./image/sprite/house.f.png", no: 0x46 },
    { fn: "./image/sprite/musica.0.png", no: 0x47 },
    { fn: "./image/sprite/musicb.0.png", no: 0x48 },
    { fn: "./image/sprite/balloon.0.png", no: 0x49 },
    { fn: "./image/sprite/flag.0.png", no: 0x4a },
    { fn: "./image/sprite/missile.0.png", no: 0x4b },
    { fn: "./image/sprite/tree.1.png", no: 0x4c },
    { fn: "./image/sprite/rock.1.png", no: 0x4d },
    { fn: "./image/sprite/flower.0.png", no: 0x4e },
    { fn: "./image/sprite/stone.1.png", no: 0x4f },

    { fn: "./image/sprite/hole.1.png", no: 0x50 },
    { fn: "./image/sprite/fence.0.png", no: 0x51 },
    { fn: "./image/sprite/beam1.0.png", no: 0x52 },
    { fn: "./image/sprite/beam2.0.png", no: 0x53 },
    { fn: "./image/sprite/beam3.0.png", no: 0x54 },
    { fn: "./image/sprite/beam4.0.png", no: 0x55 },
    { fn: "./image/sprite/beam5.0.png", no: 0x56 },
    { fn: "./image/sprite/bomb1.0.png", no: 0x57 },
    { fn: "./image/sprite/bomb2.0.png", no: 0x58 },
    { fn: "./image/sprite/bomb3.0.png", no: 0x59 },
    { fn: "./image/sprite/bomb4.0.png", no: 0x5a },
    { fn: "./image/sprite/cloud.0.png", no: 0x5b },
    { fn: "./image/sprite/forest.1.png", no: 0x5c },
    { fn: "./image/sprite/block.0.png", no: 0x5d },
    { fn: "./image/sprite/brick._.png", no: 0x5e },
    { fn: "./image/sprite/desert._.png", no: 0x5f },

    { fn: "./image/sprite/grass._.png", no: 0x60 },
    { fn: "./image/sprite/sand._.png", no: 0x61 },
    { fn: "./image/sprite/paddies._.png", no: 0x62 },
    { fn: "./image/sprite/marsh._.png", no: 0x63 },
    { fn: "./image/sprite/poison._.png", no: 0x64 },
    { fn: "./image/sprite/ladderleft.0.png", no: 0x65 },
    { fn: "./image/sprite/laddermiddle.0.png", no: 0x66 },
    { fn: "./image/sprite/ladderright.0.png", no: 0x67 },
    { fn: "./image/sprite/carback1.8.png", no: 0x68 },
    { fn: "./image/sprite/carback2.8.png", no: 0x69 },
    { fn: "./image/sprite/carback3.8.png", no: 0x6a },
    { fn: "./image/sprite/carback4.8.png", no: 0x6b },
    { fn: "./image/sprite/carlarge1.8.png", no: 0x6c },
    { fn: "./image/sprite/carlarge2.8.png", no: 0x6d },
    { fn: "./image/sprite/carlarge3.8.png", no: 0x6e },
    { fn: "./image/sprite/carlarge4.8.png", no: 0x6f },

    { fn: "./image/sprite/dragon1.f.png", no: 0x70 },
    { fn: "./image/sprite/dragon2.f.png", no: 0x71 },
    { fn: "./image/sprite/dragon3.f.png", no: 0x72 },
    { fn: "./image/sprite/dragon4.f.png", no: 0x73 },
    { fn: "./image/sprite/dragonw1.f.png", no: 0x74 },
    { fn: "./image/sprite/dragonw2.f.png", no: 0x75 },
    { fn: "./image/sprite/dragonw3.f.png", no: 0x76 },
    { fn: "./image/sprite/dragonw4.f.png", no: 0x77 },
    { fn: "./image/sprite/no.0.png", no: 0x78 },
    { fn: "./image/sprite/tri.0.png", no: 0x79 },
    { fn: "./image/sprite/yes.0.png", no: 0x7a },
    { fn: "./image/sprite/ichigojam.1.png", no: 0x7b },
    { fn: "./image/sprite/fork.1.png", no: 0x7c },
    { fn: "./image/sprite/knife.1.png", no: 0x7d },
    { fn: "./image/sprite/pancake.1.png", no: 0x7e },
    { fn: "./image/sprite/saru.1.png", no: 0x7f },

    { fn: "./image/sprite/mark_a.f.png", no: 0x80 },
    { fn: "./image/sprite/mark_b.f.png", no: 0x81 },
    { fn: "./image/sprite/mark_c.f.png", no: 0x82 },
    { fn: "./image/sprite/mark_d.f.png", no: 0x83 },
    { fn: "./image/sprite/mark_e.f.png", no: 0x84 },
    { fn: "./image/sprite/mark_f.f.png", no: 0x85 },
    { fn: "./image/sprite/mark_g.f.png", no: 0x86 },
    { fn: "./image/sprite/mark_h.f.png", no: 0x87 },
    { fn: "./image/sprite/mark_i.f.png", no: 0x88 },
    { fn: "./image/sprite/mark_j.f.png", no: 0x89 },
    { fn: "./image/sprite/mark_k.f.png", no: 0x8a },
    { fn: "./image/sprite/mark_l.f.png", no: 0x8b },
    { fn: "./image/sprite/mark_m.f.png", no: 0x8c },
    { fn: "./image/sprite/mark_n.f.png", no: 0x8d },
    { fn: "./image/sprite/mark_o.f.png", no: 0x8e },
    { fn: "./image/sprite/mark_p.f.png", no: 0x8f },

    { fn: "./image/sprite/mark_q.f.png", no: 0x90 },
    { fn: "./image/sprite/mark_r.f.png", no: 0x91 },
    { fn: "./image/sprite/mark_s.f.png", no: 0x92 },
    { fn: "./image/sprite/mark_t.f.png", no: 0x93 },
    { fn: "./image/sprite/mark_u.f.png", no: 0x94 },
    { fn: "./image/sprite/mark_v.f.png", no: 0x95 },
    { fn: "./image/sprite/mark_w.f.png", no: 0x96 },
    { fn: "./image/sprite/mark_x.f.png", no: 0x97 },
    { fn: "./image/sprite/mark_y.f.png", no: 0x98 },
    { fn: "./image/sprite/mark_z.f.png", no: 0x99 },
    { fn: "./image/sprite/mark_plus.f.png", no: 0x9a },
    { fn: "./image/sprite/mark_minus.f.png", no: 0x9b },
    { fn: "./image/sprite/mark_equal.f.png", no: 0x9c },
    { fn: "./image/sprite/mark_period.f.png", no: 0x9d },
    { fn: "./image/sprite/mark_comma.f.png", no: 0x9e },
    { fn: "./image/sprite/mark_colon.f.png", no: 0x9f },

    { fn: "./image/sprite/mark_number.f.png", no: 0xa0 },
    { fn: "./image/sprite/mark_asterisk.f.png", no: 0xa1 },
    { fn: "./image/sprite/mark_per.f.png", no: 0xa2 },
    { fn: "./image/sprite/mark_solidus.f.png", no: 0xa3 },
    { fn: "./image/sprite/mark_exclamation.f.png", no: 0xa4 },
    { fn: "./image/sprite/mark_quotation.f.png", no: 0xa5 },
    { fn: "./image/sprite/mark_0.f.png", no: 0xa6 },
    { fn: "./image/sprite/mark_1.f.png", no: 0xa7 },
    { fn: "./image/sprite/mark_2.f.png", no: 0xa8 },
    { fn: "./image/sprite/mark_3.f.png", no: 0xa9 },
    { fn: "./image/sprite/mark_4.f.png", no: 0xaa },
    { fn: "./image/sprite/mark_5.f.png", no: 0xab },
    { fn: "./image/sprite/mark_6.f.png", no: 0xac },
    { fn: "./image/sprite/mark_7.f.png", no: 0xad },
    { fn: "./image/sprite/mark_8.f.png", no: 0xae },
    { fn: "./image/sprite/mark_9.f.png", no: 0xaf },
]

for (let i = 0; i < spr.length; i++) {
    const url = "http://pancake.shizentai.jp/" + spr[i].fn.substring(2);
    console.log(url);
    const fn = url.substring(url.lastIndexOf('/'));
    const bin = new Uint8Array(await (await fetch(url)).arrayBuffer());
    const nos = spr[i].no.toString(16);
    Deno.writeFileSync("sprite/" + (nos.length == 1 ? "0" + nos : nos) + ".png", bin);
}

