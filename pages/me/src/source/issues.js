const end = 355;
const issues = [
  {
    stateID: 0,
    logText: "我出生了",
    nextStates: [
      { possibility: 0.2, stateID: 1 },
      { possibility: 0.4, stateID: 99 },
      { possibility: 2.0, stateID: 100 },
    ],
  },
  {
    stateID: 1,
    logText: "我夭折了",
    nextStates: [{ possibility: 2.0, stateID: 7 }],
  },
  {
    stateID: 2,
    logText: "我花光了所有的钱，饥饿向我伸出了魔爪，我饿死了。达成结局：告罄",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 3,
    logText:
      "我突然觉得人生的底色是黑暗的。欢愉，学习，工作，这些到头来又有什么意义呢？",
    nextStates: [{ possibility: 2.0, stateID: 4 }],
  },
  {
    stateID: 4,
    logText: "人在种种诱惑或欲望中行止不定，可是却无法面对那终极的追问",
    nextStates: [{ possibility: 2.0, stateID: 5 }],
    move: 1,
  },
  {
    stateID: 5,
    logText: "我在迷惘中沉沦。",
    nextStates: [{ possibility: 2.0, stateID: 6 }],
    observe: 1,
  },
  {
    stateID: 6,
    logText: "达成结局：黑暗",
    nextStates: [{ possibility: 2.0, stateID: end }],
    move: 1,
    desire: 1,
  },
  {
    stateID: 7,
    logText: "达成结局：不幸",
    nextStates: [{ possibility: 2.0, stateID: end }],
    move: 2,
  },
  {
    stateID: 8,
    logText: "听说有一个东西叫物理，好像很好玩",
    nextStates: [{ possibility: 2.0, stateID: 19 }],
    defend: 2,
  },

  {
    stateID: 9,
    logText: "作业真简单，写完作业就可以弹钢琴了",
    nextStates: [{ possibility: 2.0, stateID: 19 }],
    observe: 2,
  },
  {
    stateID: 10,
    logText: "我上初中了",
    nextStates: [{ possibility: 1.0, stateID: 11 }],
  },
  {
    stateID: 11,
    logText: "初中的作业比小学还多！一点都不想写，学这些有什么用嘛！",
    nextStates: [
      { possibility: 0.6, stateID: 12 },
      { possibility: 2.0, stateID: 13 },
    ],
  },
  {
    stateID: 12,
    logText: "我没有考上高中，只好出去打工",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 13,
    logText: "我上高中了。这个高中似乎很差",
    nextStates: [{ possibility: 2.0, stateID: 14 }],
  },
  {
    stateID: 14,
    logText: "我还是像以前一样，成绩不咋地。",
    nextStates: [{ possibility: 2.0, stateID: 15 }],
  },
  {
    stateID: 15,
    logText:
      "要高考了，我很紧张，能考上大学吗？可是考上了又有什么好处呢？还不是要学习？",
    nextStates: [
      { possibility: 0.6, stateID: 16 },
      { possibility: 2.0, stateID: 17 },
    ],
  },
  {
    stateID: 16,
    logText: "我没有考上大学，只好出去打工",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 17,
    logText: "我考上了大专",
    nextStates: [{ possibility: 2.0, stateID: 18 }],
  },
  {
    stateID: 18,
    logText: "我毕业了",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 19,
    logText: "我上初中了",
    nextStates: [{ possibility: 2.0, stateID: 20 }],
  },
  {
    stateID: 20,
    logText:
      "初中开始，作业变多了。我不再花时间在自己的兴趣上。或许，我也没什么真正的兴趣吧",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 21,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 0.3, stateID: 0 }],
  },
  {
    stateID: 22,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 23,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 24,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 25,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 26,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 27,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 28,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 29,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 30,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 31,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 32,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 33,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 34,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 35,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 36,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 37,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 38,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 39,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 40,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 41,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 42,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 43,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 44,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 45,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 46,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 47,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 48,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 49,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 50,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 51,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 52,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 53,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 54,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 55,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 56,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 57,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 58,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 59,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 60,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 61,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 62,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 63,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 64,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 65,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 66,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 67,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 68,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 69,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 70,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 71,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 72,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 73,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 74,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 75,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 76,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 77,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 78,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 79,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 80,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 81,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 82,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 83,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 84,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 85,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 86,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 87,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 88,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 89,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 90,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 91,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 92,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 93,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 94,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 95,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 96,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 97,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 98,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 99,
    logText: "我对运动产生了兴趣",
    nextStates: [{ possibility: 2.0, stateID: 101 }],
    defend: 2,
    age: 10,
  },
  {
    stateID: 100,
    logText: "我对写作产生了兴趣",
    nextStates: [{ possibility: 2.0, stateID: 101 }],
    observe: 2,
    age: 10,
  },
  {
    stateID: 101,
    logText: "我考上大学了",
    nextStates: [{ possibility: 2.0, stateID: 102 }],
    age: 18,
  },
  {
    stateID: 102,
    logText: "我毕业了",
    nextStates: [{ possibility: 2.0, stateID: 150 }],
    age: 22,
  },
  {
    stateID: 103,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 104,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 105,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 106,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 107,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 108,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 109,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 110,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 111,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 112,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 113,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 114,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 115,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 116,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 117,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 118,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 119,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 120,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 121,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 122,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 123,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 124,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 125,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 126,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 127,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 128,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 129,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 130,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 131,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 132,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 133,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 134,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 135,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 136,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 137,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 138,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 139,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 140,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 141,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 142,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 143,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 144,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 145,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 146,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 147,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 148,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 149,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 150,
    logText: "我当以何谋生？",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 151,
    logText: "我成为了作家",
    nextStates: [{ possibility: 2.0, stateID: 153 }],
  },
  {
    stateID: 152,
    logText: "我成为了运动员。",
    nextStates: [{ possibility: 2.0, stateID: 154 }],
  },
  {
    stateID: 153,
    logText: "【作家：因对事物的敏感而容易陷入黑暗，但战斗判定优先级高】",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 154,
    logText: "【运动员：容易从敌人身上吸取经验教训，但战斗判定优先级低】",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 155,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 156,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 157,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 158,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 159,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 160,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 161,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 162,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 163,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 164,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 165,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 166,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 167,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 168,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 169,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 170,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 171,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 172,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 173,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 174,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 175,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 176,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 177,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 178,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 179,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 180,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 181,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 182,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 183,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 184,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 185,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 186,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 187,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 188,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 189,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 190,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 191,
    logText: "我的目之力量获得了大幅增长（+3）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    observe: 3,
    className: "Cornflowerblue",
  },
  {
    stateID: 192,
    logText: "我的心之力量获得了大幅增长（+3）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    defend: 3,
    className: "Tomato",
  },
  {
    stateID: 193,
    logText: "我的珠之力量获得了大幅增长（+3）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    technique: 3,
    className: "Lightslategray",
  },
  {
    stateID: 194,
    logText: "我的水之力量获得了大幅增长（+3）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    desire: 3,
    className: "Blue",
  },
  {
    stateID: 195,
    logText: "我的目之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    observe: 1,
    className: "Cornflowerblue",
  },
  {
    stateID: 196,
    logText: "我的心之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    defend: 1,
    className: "Tomato",
  },
  {
    stateID: 197,
    logText: "我的珠之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    technique: 1,
    className: "Lightslategray",
  },
  {
    stateID: 198,
    logText: "我的水之力量获得了增长",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    desire: 1,
    className: "Blue",
  },
  {
    stateID: 199,
    logText: "警告：似乎程序出了问题，建议不要关闭网页，并反馈给开发者",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 200,
    logText: "我闲下来了 ",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  //闲下来的操作：
  {
    stateID: 201,
    logText: "我决定外出取材（时间-1）",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    time: -1,
  },
  {
    stateID: 202,
    logText: "我决定出去转转",
    nextStates: [{ possibility: 2.0, stateID: 211 }],
  },
  {
    stateID: 203,
    logText: "我决定磨练我的目之力量（时间-1）",
    nextStates: [
      { possibility: 0.4, stateID: 195 },
      { possibility: 2.0, stateID: 204 },
    ],
    time: -1,
  },
  {
    stateID: 204,
    logText: "日复一日，我并没有什么长进",
    nextStates: [
      { possibility: 0.1, stateID: 205 },
      { possibility: 2.0, stateID: 200 },
    ],
  },
  {
    stateID: 205,
    logText: "我不能接受。我真的不擅长观察吗？",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 206,
    logText: "我决定参加比赛（时间-1）",
    nextStates: [
      { possibility: 0.2, stateID: 311 }, //判断兴趣
      { possibility: 0.1, stateID: 316 }, //没获得
      { possibility: 0.1, stateID: 317 }, //受伤了
      { possibility: 0.4, stateID: 308 }, //一些
      { possibility: 2.0, stateID: 309 }, //很多
    ],
    time: -1,
  },
  {
    stateID: 207,
    logText: "又过了一段日子。我坐在书桌前，开始写作",
    nextStates: [
      { possibility: 0.2, stateID: 305 }, //判断兴趣
      { possibility: 0.1, stateID: 301 }, //无思路
      { possibility: 0.3, stateID: 302 }, //一些
      { possibility: 2.0, stateID: 303 }, //很多
    ],
  },
  {
    stateID: 208,
    logText: "我买了一本神秘学书籍（金钱-1） ",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    money: -1,
  },
  {
    stateID: 209,
    logText: "书店门口写着几个大字：旺铺招租",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 210,
    logText: "我决定去书店买书",
    nextStates: [{ possibility: 2.0, stateID: 208 }],
  },
  //探险的选择：
  {
    stateID: 211,
    logText: "我决定去城里转转（时间-1）",
    nextStates: [
      { possibility: 0.3, stateID: 216 }, //钱包
      { possibility: 0.4, stateID: 229 }, //敌人
      { possibility: 2.0, stateID: 230 }, //酒馆
    ],
    time: -1,
  },
  {
    stateID: 212,
    logText: "我决定去其他城市旅游（时间-1）",
    nextStates: [{ possibility: 2.0, stateID: 241 }],
    time: -1,
  },
  {
    stateID: 213,
    logText: "我决定去乡下看看（时间-2）",
    nextStates: [{ possibility: 2.0, stateID: 605 }], //抽取敌人
    time: -2,
  },
  {
    stateID: 214,
    logText: "我决定去森林野营（时间-2）",
    nextStates: [{ possibility: 2.0, stateID: 606 }],
    time: -2,
  },
  {
    stateID: 215,
    logText: "我决定去山脉深处探险（时间-3）",
    nextStates: [{ possibility: 2.0, stateID: 615 }],
    time: -3,
  },
  //城里探险结果：
  {
    stateID: 216,
    logText: "我捡到了一个钱包。原地等了半个小时也不见有人过来。",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 217,
    logText: "我打开了钱包。钱包里有很多钱，好耶！（金钱+3）",
    nextStates: [
      { possibility: 0.8, stateID: 220 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 4,
  },
  {
    stateID: 218,
    logText: "我打开了钱包。钱包里没多少钱（金钱+1）",
    nextStates: [
      { possibility: 0.4, stateID: 220 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 1,
  },
  {
    stateID: 219,
    logText: "我将钱包交给了警察",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    reputation: 1,
  },
  {
    stateID: 220,
    logText: "一股惆怅的思绪悄然而生。这是正确的吗？我应该愧对自己的良心吗？",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 221,
    logText: "我走在小巷里，前面突然出现两个混混。他们目光锐利地盯着我",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 4,
      defend: 1,
      technique: 1,
      desire: 1,
      gain: 0.1,
      gainState: 195,
    },
  },
  {
    stateID: 222,
    logText: "我走在小巷里，前面突然出现两个体格壮硕的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 4,
      technique: 1,
      desire: 1,
      gain: 0.1,
      gainState: 196,
    },
  },
  {
    stateID: 223,
    logText: "我走在小巷里，前面突然出现两个手持匕首的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 4,
      desire: 1,
      gain: 0.1,
      gainState: 197,
    },
  },
  {
    stateID: 224,
    logText:
      "我走在小巷里，前面突然出现两个混混。空气中弥漫着一股奇异气味，我觉得被这气味吸引",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 1,
      desire: 4,
      gain: 0.1,
      gainState: 198,
    },
  },
  {
    stateID: 225,
    logText: "我走在小巷里，前面突然出现一群混混。他们目光锐利地盯着我",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 6,
      defend: 1,
      technique: 1,
      desire: 1,
      gain: 0.2,
      gainState: 195,
    },
  },
  {
    stateID: 226,
    logText: "我走在小巷里，前面突然出现一群体格壮硕的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 6,
      technique: 1,
      desire: 1,
      gain: 0.2,
      gainState: 196,
    },
  },
  {
    stateID: 227,
    logText: "我走在小巷里，前面突然出现一群手持匕首的混混",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 6,
      desire: 1,
      gain: 0.2,
      gainState: 197,
    },
  },
  {
    stateID: 228,
    logText:
      "我走在小巷里，前面突然出现一群混混。空气中弥漫着一股奇异气味，我觉得被这气味吸引",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 1,
      desire: 6,
      gain: 0.2,
      gainState: 198,
    },
  },
  {
    stateID: 229,
    logText: "抽取敌人1级（此条若出现在文本框，请反馈给开发者）",
    hidden: true,
    nextStates: [
      { possibility: 0.125, stateID: 221 },
      { possibility: 0.125, stateID: 222 },
      { possibility: 0.125, stateID: 223 },
      { possibility: 0.125, stateID: 224 },
      { possibility: 0.125, stateID: 225 },
      { possibility: 0.125, stateID: 226 },
      { possibility: 0.125, stateID: 227 },
      { possibility: 2.0, stateID: 228 },
    ],
  },
  {
    stateID: 230,
    logText: "我不知不觉就走进了一间酒馆。干脆喝点酒好了",
    nextStates: [
      { possibility: 0.7, stateID: 231 },
      { possibility: 2.0, stateID: 232 },
    ],
  },
  {
    stateID: 231,
    logText: "白日放歌须纵酒，一杯又一杯，我的心情变得舒畅",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: -1,
  },
  {
    stateID: 232,
    logText: "举杯消愁愁更愁，人生真是没有意义啊！",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 233,
    logText: "我总是在城里转，有记者盯上了我",
    nextStates: [{ possibility: 2.0, stateID: 234 }],
  },
  {
    stateID: 234,
    logText: "“今日头条：某人连续36天在城里闲逛，合理怀疑其为某大人物私生子”",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    reputation: 1,
  },
  {
    stateID: 235,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 236,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 237,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 238,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 239,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 240,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 241,
    logText: "抽取敌人2级（此条若出现在文本框，请反馈给开发者）",
    hidden: true,
    nextStates: [
      { possibility: 0.05, stateID: 243 },
      { possibility: 0.05, stateID: 242 },
      { possibility: 0.05, stateID: 244 },
      { possibility: 0.05, stateID: 245 },
      { possibility: 0.2, stateID: 246 },
      { possibility: 0.2, stateID: 269 },
      { possibility: 0.2, stateID: 258 },
      { possibility: 2.0, stateID: 260 },
    ],
  },
  {
    stateID: 242,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 6,
      defend: 1,
      technique: 1,
      desire: 3,
      gain: 0.3,
      gainState: 195,
      reputation: 1,
    },
  },
  {
    stateID: 243,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 6,
      technique: 1,
      desire: 3,
      gain: 0.3,
      gainState: 196,
      reputation: 1,
    },
  },
  {
    stateID: 244,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 6,
      desire: 3,
      gain: 0.3,
      gainState: 197,
      reputation: 1,
    },
  },
  {
    stateID: 245,
    logText: "我开着车前往目的地，在路上遇到了一群不怀好意的强盗 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 3,
      technique: 1,
      desire: 6,
      gain: 0.3,
      gainState: 198,
      reputation: 1,
    },
  },
  {
    stateID: 246,
    logText: "与2级目性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 10,
      defend: 1,
      technique: 0,
      desire: 1,
      gain: 0.4,
      gainState: 195,
    },
  },
  {
    stateID: 247,
    logText: "我不得不与他战斗",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 10,
      technique: 0,
      desire: 1,
      gain: 0.5,
      gainState: 196,
      failPlotState: 254,
      winPlotState: 250,
    },
  },
  {
    stateID: 248,
    logText: "他抬起了话筒。我知道这一战难以避免了。",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 0,
      defend: 1,
      technique: 10,
      desire: 1,
      gain: 1,
      gainState: 197,
      enemyStateID: 260,
      winPlotState: 253,
    },
  },
  {
    stateID: 249,
    logText: "我决定与这梦中诡异战斗",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    enemy: {
      observe: 1,
      defend: 1,
      technique: 0,
      desire: 10,
      gain: 0.4,
      gainState: 198,
    },
  },
  {
    stateID: 250,
    logText: "我成功地推开了窗户。",
    nextStates: [{ possibility: 2.0, stateID: 251 }],
  },
  {
    stateID: 251,
    logText: "我冲出了邪教团体的总部，顺利逃脱了他们的追捕。",
    nextStates: [{ possibility: 2.0, stateID: 252 }],
  },
  {
    stateID: 252,
    logText: "我跑到了街上，心里充满了不安和恐惧，但同时也感到了一种解脱感。",
    nextStates: [{ possibility: 2.0, stateID: 253 }],
  },
  {
    stateID: 253,
    logText: "我最终回到了家里",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    insertEnd: true,
  },
  {
    stateID: 254,
    logText: "我没能摆脱他，一群邪教徒随后围住了我",
    nextStates: [{ possibility: 2.0, stateID: 255 }],
  },
  {
    stateID: 255,
    logText: "在接下来的几天，邪教徒们使用各种手段对我们洗脑",
    nextStates: [{ possibility: 2.0, stateID: 256 }],
  },
  {
    stateID: 256,
    logText: "很好，我终于明白了世界的真理",
    nextStates: [{ possibility: 2.0, stateID: 257 }],
  },
  {
    stateID: 257,
    logText: "达成结局：真理",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 258,
    logText: "我住在一家旅馆。据说这里曾经闹鬼，管他呢",
    nextStates: [{ possibility: 2.0, stateID: 259 }],
    skipStateID: 249,
  },
  {
    stateID: 259,
    logText: "夜幕降临，我缓缓入睡。梦境的浅白色却忽而变为刺目的漆黑",
    nextStates: [{ possibility: 2.0, stateID: 293 }],
  },
  {
    stateID: 260,
    logText: "我前往当地一家知名酒馆。当地有一首关于这家酒馆的童谣：",
    nextStates: [{ possibility: 2.0, stateID: 261 }],
    skipStateID: 248,
  },
  {
    stateID: 261,
    logText: "流浪者，歌神梦",
    nextStates: [{ possibility: 2.0, stateID: 262 }],
  },
  {
    stateID: 262,
    logText: "身已死，生异变",
    nextStates: [{ possibility: 2.0, stateID: 263 }],
  },
  {
    stateID: 263,
    logText: "嘴轻启，手轻动",
    nextStates: [{ possibility: 2.0, stateID: 264 }],
  },
  {
    stateID: 264,
    logText: "传千音，攻心魄",
    nextStates: [{ possibility: 2.0, stateID: 265 }],
  },
  {
    stateID: 265,
    logText: "这童谣听上去可不太适合儿童",
    nextStates: [{ possibility: 2.0, stateID: 266 }],
  },
  {
    stateID: 266,
    logText: "我到了，我推开酒馆的门",
    nextStates: [{ possibility: 2.0, stateID: 267 }],
  },
  {
    stateID: 267,
    logText: "我进入这家酒馆后，所有人都突然停下了一切活动，仿佛被什么力量所束缚。",
    nextStates: [{ possibility: 2.0, stateID: 268 }],
  },
  {
    stateID: 268,
    logText:
      "他们一个个瘫倒在桌子和椅子上，就连喝酒的杯子都悬浮在空中，不再倾泻出一滴酒液。",
    nextStates: [{ possibility: 2.0, stateID: 286 }],
  },
  {
    stateID: 269,
    logText: "在旅游的过程中，我结识了一些朋友。 ",
    nextStates: [{ possibility: 2.0, stateID: 270 }],
    skipStateID: 247,
  },
  {
    stateID: 270,
    logText:
      "其中一位在我即将离开此地时，邀请我参加一个派对，我欣然接受了邀请，前往派对现场。",
    nextStates: [{ possibility: 2.0, stateID: 271 }],
  },
  {
    stateID: 271,
    logText: "然而，随着派对的进行，我逐渐发现派对的内容变得越来越诡异， ",
    nextStates: [{ possibility: 2.0, stateID: 272 }],
  },
  {
    stateID: 272,
    logText:
      "有些参加聚会的人身着衣袍，神情奇异，状似疯狂，与正常派对的反应有很大不同。 ",
    nextStates: [{ possibility: 2.0, stateID: 273 }],
  },
  {
    stateID: 273,
    logText:
      "这时，主持人拿着话筒，开始宣传“这个世界的真理”。我意识到这是一个邪教团体。 ",
    nextStates: [{ possibility: 2.0, stateID: 274 }],
  },
  {
    stateID: 274,
    logText: "有人也发现了不对劲的地方，慌张地跑向门口， ",
    nextStates: [{ possibility: 2.0, stateID: 275 }],
  },
  {
    stateID: 275,
    logText: "但几个壮汉将他一把抓住，不顾他的求饶将他挟持走了。 ",
    nextStates: [{ possibility: 2.0, stateID: 276 }],
  },
  {
    stateID: 276,
    logText: "主持人则说：“别害怕，我们很快就是‘家人’了。”",
    nextStates: [{ possibility: 2.0, stateID: 277 }],
  },
  {
    stateID: 277,
    logText: "我明白了这场派对的真实目的，他们想要洗脑，把我变成他们的一员。",
    nextStates: [{ possibility: 2.0, stateID: 278 }],
  },
  {
    stateID: 278,
    logText: "在惊讶与紧张中，我开始思考如何逃离此处。",
    nextStates: [{ possibility: 2.0, stateID: 279 }],
  },
  {
    stateID: 279,
    logText:
      "心中的恐惧与不安让我开始寻找逃生的机会，但是这个邪教团体却巧妙地将所有的出口都封锁了。",
    nextStates: [{ possibility: 2.0, stateID: 280 }],
  },
  {
    stateID: 280,
    logText: "我躲在墙角，小心地观察着周围的情况，寻找任何逃生的机会。",
    nextStates: [{ possibility: 2.0, stateID: 281 }],
  },
  {
    stateID: 281,
    logText: "我发现一扇窗户没有关紧，旁边站着一个身材高大的邪教徒。",
    nextStates: [{ possibility: 2.0, stateID: 282 }],
  },
  {
    stateID: 282,
    logText: "我深呼吸一口气，装作自然地走过那个邪教徒，试图不引起他的注意。",
    nextStates: [{ possibility: 2.0, stateID: 283 }],
  },
  {
    stateID: 283,
    logText:
      "然而，那个邪教徒突然伸手抓住了我，嘶声力竭地大喊道：“你要去哪里？你不能离开！”",
    nextStates: [{ possibility: 2.0, stateID: 284 }],
  },
  {
    stateID: 284,
    logText: "我不得不反击，费力地把他推开，并奋力冲向窗户的出口。",
    nextStates: [{ possibility: 2.0, stateID: 285 }],
  },
  {
    stateID: 285,
    logText: "我几乎触手可及地伸出手去打开窗户，却又被那个邪教徒抓住了胳膊。",
    nextStates: [{ possibility: 2.0, stateID: 247 }],
  },
  {
    stateID: 286,
    logText: "然而，舞台上的歌手却毫不受影响，他继续唱着。",
    nextStates: [{ possibility: 2.0, stateID: 287 }],
  },
  {
    stateID: 287,
    logText: "我走近舞台，才发现这个歌手的情况比其他人更加诡异。 ",
    nextStates: [{ possibility: 2.0, stateID: 288 }],
  },
  {
    stateID: 288,
    logText: "他的眼睛发出一种异样的光芒，身上的衣服破烂不堪。 ",
    nextStates: [{ possibility: 2.0, stateID: 289 }],
  },
  {
    stateID: 289,
    logText: "他的双手以一种奇怪的姿势扭曲着，就像在演奏一种诡异的乐器。 ",
    nextStates: [{ possibility: 2.0, stateID: 290 }],
  },
  {
    stateID: 290,
    logText: "而当他唱歌时，却能传递出一股奇异的力量，让人感觉到心魄受到了攻击。 ",
    nextStates: [{ possibility: 2.0, stateID: 291 }],
  },
  {
    stateID: 291,
    logText: "我不禁感到惊讶和恐惧，但心灵却被这种神秘的力量所攥紧。 ",
    nextStates: [{ possibility: 2.0, stateID: 292 }],
  },
  {
    stateID: 292,
    logText:
      "他突然停止了歌唱，转过头来看着我。他的眼神让我感到一种冰冷的刺痛，就好像看到了死神一般。 ",
    nextStates: [{ possibility: 2.0, stateID: 248 }],
  },
  {
    stateID: 293,
    logText: "一个奇怪的鬼怪出现在梦里，",
    nextStates: [{ possibility: 2.0, stateID: 294 }],
  },
  {
    stateID: 294,
    logText: "我感到十分恐惧，却无法逃脱。",
    nextStates: [{ possibility: 2.0, stateID: 295 }],
  },
  {
    stateID: 295,
    logText:
      "鬼怪发出诡异的声音，不断地低语，我感觉到自己的身体不受控制地颤抖起来。 ",
    nextStates: [{ possibility: 2.0, stateID: 296 }],
  },
  {
    stateID: 296,
    logText: "突然，我摆脱了恐惧的状态，恢复了对梦中身体的控制",
    nextStates: [{ possibility: 2.0, stateID: 249 }],
  },
  {
    stateID: 297,
    logText: "1111111111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 298,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 299,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 300,
    logText: "1111111111111111111111 ",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 301,
    logText: "可恶！什么思路都没有。左脑装满了水，右脑装满了面粉，一晃全是浆糊",
    nextStates: [
      { possibility: 0.5, stateID: 304 },
      { possibility: 2.0, stateID: 200 },
    ],
  },
  {
    stateID: 302,
    logText: "我的作品卖得还行（金钱+1）",
    nextStates: [
      { possibility: 0.05, stateID: 195 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 1,
  },
  {
    stateID: 303,
    logText: "不错，我的书获得了大卖（金钱+2）",
    nextStates: [
      { possibility: 0.5, stateID: 195 },
      { possibility: 2.0, stateID: 200 },
    ],
    money: 2,
    reputation: 1,
  },
  {
    stateID: 304,
    logText: "没有思路太痛苦了！空虚，空洞，冰冷，无味，我的灵魂。为什么！",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    dark: 1,
  },
  {
    stateID: 305,
    logText: "判断是否有兴趣：写作……（若出现此条请反馈给开发者）",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    hidden: true,
  },
  {
    stateID: 306,
    logText: "我没什么好的思路，不过凭着一腔热情随便写写也是可以的",
    nextStates: [{ possibility: 2.0, stateID: 302 }],
  },
  {
    stateID: 307,
    logText: "我对写作实在没啥兴趣，凑不出有用的思路",
    nextStates: [{ possibility: 2.0, stateID: 301 }],
  },
  {
    stateID: 308,
    logText: "我获得了一些奖金（金钱+1）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    money: 1,
  },
  {
    stateID: 309,
    logText: "我获得了很多奖金（金钱+2，名声+1）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    money: 2,
    reputation: 1,
  },
  {
    stateID: 310,
    logText: "所以参加的是业余比赛，没有奖金",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 311,
    logText: "判断是否有兴趣：运动……",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    hidden: true,
  },
  {
    stateID: 312,
    logText: "我对运动没啥兴趣",
    nextStates: [{ possibility: 2.0, stateID: 310 }],
  },
  {
    stateID: 313,
    logText: "最近状态不佳，不过以我从小的锻炼，获得奖金还是很容易的",
    nextStates: [{ possibility: 2.0, stateID: 308 }],
  },
  {
    stateID: 314,
    logText: "我决定磨练我的心之力量（时间-1）",
    nextStates: [
      { possibility: 0.4, stateID: 196 },
      { possibility: 2.0, stateID: 315 },
    ],
    time: -1,
  },
  {
    stateID: 315,
    logText: "最近的训练并没有什么成效",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 316,
    logText: "我没赢得奖金",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 317,
    logText: "我在比赛中受伤了（心性相-1）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    defend: -1,
  },
  {
    stateID: 318,
    logText: "我的身体太差了", //某性相小于等于0
    nextStates: [{ possibility: 2.0, stateID: 319 }],
  },
  {
    stateID: 319,
    logText: "我在一次疾病中离世",
    nextStates: [{ possibility: 2.0, stateID: 320 }],
  },
  {
    stateID: 320,
    logText: "达成结局：虚弱",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 321,
    logText: "我已完成质变（每年消耗金钱-1）（若二次出现请反馈给开发者）",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    insertEnd: true,
  },
  {
    stateID: 322,
    logText: "我已升华（每年消耗金钱-1）（若二次出现请反馈给开发者）",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    insertEnd: true,
  },
  {
    stateID: 323,
    logText: "我几乎不在是人类（每年消耗金钱-1）（若二次出现请反馈给开发者）",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    insertEnd: true,
  },
  {
    stateID: 324,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 325,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 326,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 327,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 328,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 329,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 330,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 331,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 332,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 333,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 334,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 335,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 336,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 337,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 338,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 339,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 340,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 341,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 342,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 343,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 344,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 345,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 346,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 347,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 348,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 349,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 350,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 351,
    logText: "我正悠闲地四处转着，一个衣衫褴褛的老人出现在我的视野里。",
    nextStates: [{ possibility: 2.0, stateID: 352 }],
  },
  {
    stateID: 352,
    logText: "他来到我面前，问我是否对生活有着新的渴望",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 353,
    logText: "不必了，我的生活很充实",
    nextStates: [{ possibility: 2.0, stateID: 354 }],
  },

  {
    stateID: 354,
    logText: "达成结局：平凡即是喜乐",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 355,
    logText: "你可以点击按钮重新开启一局游戏",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 356,
    logText: "渴望？是的",
    nextStates: [{ possibility: 2.0, stateID: 357 }],
  },
  {
    stateID: 357,
    logText: "他留下一本破破烂烂的书便离开了",
    nextStates: [{ possibility: 2.0, stateID: 358 }],
    bookStateID: 701,
  },
  {
    stateID: 358,
    logText: "我将信将疑地打开书本，发现上面记录的是一些神神秘秘的物品和生物",
    nextStates: [{ possibility: 2.0, stateID: 359 }],
  },
  {
    stateID: 359,
    logText: "原来世界上还有这些鲜为人知的秘密",
    nextStates: [{ possibility: 2.0, stateID: 360 }],
  },
  {
    stateID: 360,
    logText: "【解锁：性相界面】【解锁：磨练】",
    nextStates: [{ possibility: 2.0, stateID: 361 }],
  },
  {
    stateID: 361,
    logText: "几天后，我在报纸上看到那名老人死在街头的新闻，据说是自杀",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },

  {
    stateID: 362,
    logText: "我在超市排队结账时，发现自己忘带信用卡了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 363,
    logText: "我在公园里散步时，无意中帮助一个迷路的小孩找到了他的家长。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 364,
    logText: "我在地铁上听着音乐，突然发现自己上了错车。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 365,
    logText: "我在海边散步时，捡到了一个漂亮的贝壳。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 366,
    logText:
      "我在路上看到一个老太太摔倒了，赶紧上前扶起她并送她回家。还好没有被讹。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 367,
    logText: "我在咖啡馆里等朋友时，无聊之下和服务员聊了几句天。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 368,
    logText: "我在参加朋友的生日聚会时，不小心打翻了蛋糕。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 369,
    logText: "我在餐厅里用餐时，被一个服务员的优秀服务所感动。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 370,
    logText: "我在家中看电视时，突然停电了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 371,
    logText: "我在健身房锻炼时，意外认识了一个志同道合的朋友。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 372,
    logText: "我在上班途中，看到一只小狗走失了，于是赶快帮它找到了主人。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 373,
    logText: "我在图书馆里翻阅书籍时，无意中发现了一本非常好看的小说。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 374,
    logText: "我在商场购物时，因为太过兴奋而买了一堆不必要的东西。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 375,
    logText: "我受邀担任实验被试者，做实验时，由于疏忽而把试管摔破了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 376,
    logText: "我在朋友家里玩桌游时，因为太过激动而把桌子上的饮料洒了一地。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 377,
    logText: "我在地铁上看到一位老人没有座位，于是让自己的座位让给了他。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 378,
    logText: "我在学校里参加课外活动时，结识了一位志同道合的朋友。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 379,
    logText: "我在海边玩沙子时，意外发现了一个被埋在沙子里的宝藏。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 380,
    logText: "我在路上碰到了一个认识的人，但是忘记了他的名字。好尴尬。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 381,
    logText: "我在音乐会上听到了一首让自己很感动的歌曲。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 382,
    logText: "我在街上被一群手持玩具枪的小孩围攻了，最终被好心的路人救出。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 383,
    logText: "我在餐厅点了一道不太熟悉的菜品，却发现自己非常喜欢。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 384,
    logText: "我在打扫房间时，发现了一只萌萌哒的小老鼠玩具。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 385,
    logText: "我在公园里遛狗时，被别人的小狗咬了一口。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 386,
    logText: "我在游泳池里游泳时，意外遇到了一个老同学。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 387,
    logText: "我在超市里购物时，发现自己忘记带购物袋了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 388,
    logText: "我在医院看病时，等待的时间非常漫长。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 389,
    logText: "我在夜晚散步时，听到了远处传来的美妙的钢琴曲。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 390,
    logText: "我在街上走着走着，突然感觉到口渴了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 391,
    logText: "我在学校上课时，无聊之余画了一张漂亮的画。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 392,
    logText: "我在游乐园里体验了一些惊险的游戏项目，还认识了一位疯狂尖叫的小姐姐",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 393,
    logText: "我在电影院里看电影时，遇到了一个让自己印象深刻的场景。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 394,
    logText: "我在玩游戏时，电脑突然蓝屏了",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 395,
    logText: "我在大街上看到一位流浪汉，心生同情给他买了一份午餐。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 396,
    logText: "我在聚会上认识了一位新朋友，却忘了要他的联系方式。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 397,
    logText: "我在朋友家里吃饭时，吃得太多导致肚子不舒服。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 398,
    logText: "我在公园里散步时，听到了一位街头艺人弹唱的歌曲，他唱的真不错！",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 399,
    logText: "我在超市购物时，发现自己带的钱不够付账，尬住了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 400,
    logText: "我在参加写作比赛时，由于紧张而犯了一些低级错误。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 401,
    logText: "我在酒吧里喝的酒太多了，头晕眼花。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 402,
    logText: "我在医院陪伴朋友看病时，度过了漫长的等待时间，好无聊。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 403,
    logText: "我在社区里参加义务劳动时，因为不小心受了伤。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 404,
    logText: "我在健身房里锻炼时，被一个健身者的肌肉所震撼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 405,
    logText: "我在海边玩水时，不小心被浪打了一身，湿漉漉地回家了",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 406,
    logText: "我在路上看到了一辆超级漂亮的跑车，忍不住拍了一张照片。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 407,
    logText: "我在打扫房间时，发现了一些旧物件，让我想起了往事。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 408,
    logText: "我在KTV里和同学一起开心地唱歌跳舞。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 409,
    logText: "我在咖啡馆里品尝了一款非常好喝的咖啡。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 410,
    logText: "我在街头巧遇了一位前辈，向他请教了一些问题。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 411,
    logText: "我在城里闲逛时发现了一座历史悠久的博物馆，以前居然没注意到！",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 412,
    logText: "我在购物中心里逛街时，被一件漂亮的衣服吸引住了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 413,
    logText: "我在家里看电影时，被一部悬疑片吓到了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 414,
    logText: "我在公交车上，无意中听到了陌生人的谈话，他们在聊炸弹，天呐！",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 415,
    logText: "我在夜晚散步时，看到了一轮明月挂在天空，真漂亮。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 416,
    logText: "我在家里看书时，无法集中注意力，需要找到有效的方法。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 417,
    logText: "我在户外跑步时，突然下起了大雨。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 418,
    logText: "我在宠物店里看到了一只可爱的小狗，让我心动不已。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 419,
    logText: "我在驾驶车辆时，发现路上有一些司机喝醉般乱开车，需要赶紧避开。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 420,
    logText: "我在运动时，不慎摔倒受伤。此时一位好心的先生扶我起来",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 421,
    logText: "我在做饭时，烧焦了一道菜，让我感到很失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 422,
    logText: "我在路上遇到了一个遗失的物品，想方设法找到了失主。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 423,
    logText: "我在餐厅里点了一份久负盛名的美食，却发现自己不喜欢这道菜的味道。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 424,
    logText: "我出于好奇参加了一次冲浪课程，体验非常刺激。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 425,
    logText: "我在体检中发现了一些健康问题，需要及时采取措施。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 426,
    logText: "我在看电视时，无意中看到了一则让我感动的新闻。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 427,
    logText: "我在超市里购物时，被一个小孩子的天真可爱深深吸引。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 428,
    logText: "我在餐厅吃饭，遇到了一个老朋友，让我感到意外和惊喜。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 429,
    logText: "我在健身房里锻炼时，遇到了一个非常友好的教练，他让我感到很舒适。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 430,
    logText: "我在做家务时，不小心弄脏了一件喜欢的衣服，让我感到有点失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 431,
    logText: "我在看电影时，发现自己跟剧情中的主角有很多共鸣。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 432,
    logText: "我在和朋友聊天时，发现自己和对方有许多共同点，这让我们更加亲近。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 433,
    logText: "我在一个第一次去的购物中心里迷路了，花了好久才找到出口。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 434,
    logText: "我在和家人一起度过一个愉快的周末，感到非常幸福。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 435,
    logText: "我在约会时，遇到了一个非常有趣的人，让我度过了一个美好的夜晚。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 436,
    logText: "我在假期中去了一个新的城市，发现了很多新奇的事物。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 437,
    logText: "我在一个戏剧表演中注意到了一位非常优秀的表演者，她让我感到震撼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 438,
    logText: "我在野外露营时，遇到了一只狐狸，让我感到有点害怕。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 439,
    logText: "我在电影院里看到了一部很差的电影，让我感到有些失望。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 440,
    logText: "我在参加一个派对时，遇到了一个很自大的人，让我感到有些不舒服。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 441,
    logText: "我在旅行中遇到了一些交通堵塞，浪费了很多时间。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 442,
    logText: "我在逛街时，发现了一只很合适的帽子，让我感到很开心。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 443,
    logText: "我在户外运动时，不小心受伤了，需要寻求医生的帮助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 444,
    logText: "我在网络上看到了一些令人不愉快的评论，让我感到有些失望。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 445,
    logText: "我在听一位老师的讲座时，感到自己的视野得到了开阔。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 446,
    logText: "我在和朋友一起吃饭时，感到自己的社交能力得到了锻炼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 447,
    logText: "我在等公交时，车上人特别多，只好等下一辆。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 448,
    logText: "家里墙壁脱漆严重，不得不请装修人员来刷漆",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 449,
    logText: "我在阅读一本好书时，感到自己的阅读理解能力得到了提升。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 450,
    logText: "我在逛公园时，看到了一场美丽的日落，让我感到心旷神怡。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 451,
    logText: "我完成了一个复杂的折纸手工品，分享在社交媒体上，获得了很多点赞。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 452,
    logText: "我在学习一门外语时，发现自己的口语能力有了很大提升。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 453,
    logText: "我在一个展览馆里欣赏了一场精彩的艺术展，让我感到很有收获。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 454,
    logText: "我在旅行中遇到了一些热心的当地人，让我感到很幸福。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 455,
    logText: "我在和朋友一起玩游戏，因为技术太烂被嫌弃了。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 456,
    logText: "我在参观5D展馆时，感觉自己的心灵受到了震撼。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 457,
    logText: "我在一个演讲比赛中获得了优异成绩，感到自己的演讲能力得到了提高。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 458,
    logText: "我与朋友一起举办了一次聚会，让我感到很幸福。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 459,
    logText: "我在游览一个历史遗迹时，感受到了历史的厚重和文化的传承。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 460,
    logText: "我在逛街时，买到了自己一直想要的手办，让我感到很满足。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 461,
    logText: "我在养老院做义工，看到老人的笑容，感觉自己的善良受到了回报。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 462,
    logText: "我在和朋友一起玩游戏时，感到自己的技术水平比以前提高了不少。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 463,
    logText: "我在公共场合走光了，让我感到很尴尬和不安。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 464,
    logText: "我的手机被盗了，里面的重要信息也随之丢失，让我感到很沮丧和无助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 465,
    logText: "我的宠物突然生病去世了，让我感到很悲伤和失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 466,
    logText: "我在参加派对时喝醉了，发了酒疯，让我感到很尴尬和羞愧。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 467,
    logText: "我在旅行中丢了护照，让我感到很无助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 468,
    logText:
      "我被朋友背叛了，不仅让我失去了这个朋友，还伤害了我的信任感，让我感到很痛苦和愤怒。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
  },
  {
    stateID: 469,
    logText: "我在一场重要的比赛中失利了，让我感到很失败和自卑。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 470,
    logText: "我遭遇了网络诈骗，让我感到很愤怒。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 471,
    logText: "听说一位朋友遭遇了家庭暴力，让我感到对人性的失望。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 472,
    logText: "我被伴侣出轨，让我感到很伤心和失落。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 473,
    logText: "我在社交媒体上受到了网络暴力，让我感到很受伤和无助。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 474,
    logText: "我在聚会中感到格格不入，充满了孤独和无趣",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 475,
    logText: "听说我的老友在火灾中丧生，感到很伤心。",
    nextStates: [{ possibility: 2.0, stateID: 207 }],
    dark: 1,
  },
  {
    stateID: 476,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 477,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 478,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 479,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 480,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 481,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 482,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 483,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 484,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 485,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 486,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 487,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 488,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 489,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 490,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 491,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 492,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 493,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 494,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 495,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 496,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 497,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 498,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 499,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 500,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 501,
    logText: "达成结局：入狱",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 502,
    logText: "“你被逮捕了！”",
    nextStates: [{ possibility: 2.0, stateID: 501 }],
  },
  {
    stateID: 503,
    logText: "这名捕手比以往敌人强得多。我败了，无力地瘫倒在墙角。",
    nextStates: [{ possibility: 2.0, stateID: 502 }],
  },
  {
    stateID: 504,
    logText: "我有了些名声，有愚蠢的治安官认为我是邪教徒，竟然开始搜查我犯案的证据",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 505,
    logText: "治安官搜集到了我外出行动的证据",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 506,
    logText: "治安官搜集到了我采购物资的证据，真糟糕",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 507,
    logText: "治安官搜集到了我召集同伙的证据。假如我的名声再增大，或许我就有麻烦了",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 508,
    logText: "治安官找到我了！",
    nextStates: [{ possibility: 2.0, stateID: 509 }],
    className: "Navy",
  },
  {
    stateID: 509,
    logText: "或许我可以用一些钱来贿赂他，不然我就要背水一战了",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    className: "Navy",
    sheriff: {
      observe: 5,
      defend: 5,
      technique: 5,
      desire: 5,
      winNextStateID: 511,
      nextSheriff: 6,
    },
  },
  {
    stateID: 510,
    logText: "“你很不错。不过，下次就不是我了，呵呵，祝你好运~（名声-5）”",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    className: "Navy",
    reputation: -5,
  },
  {
    stateID: 511,
    logText: "治安官迎来了他的末日。",
    nextStates: [{ possibility: 2.0, stateID: 512 }],
    className: "Darkred",
  },
  {
    stateID: 512,
    logText: "“胜利之人，你莫得意。我的同僚强大许多。”",
    nextStates: [{ possibility: 2.0, stateID: 513 }],
    className: "Navy",
  },
  {
    stateID: 513,
    logText: "我现在更容易被官方敌人发现（名声 +10）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    className: "Navy",
    reputation: 10,
  },
  {
    stateID: 514,
    logText: "我被一名官方猎魔人盯上了",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 515,
    logText: "猎魔人整理了我过往的证据",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 516,
    logText: "据说猎魔人找到了我的旧住处，幸好我早已搬家",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 517,
    logText: "猎魔人跟踪了我，不过被我甩掉了",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 518,
    logText: "猎魔人找到我了！",
    nextStates: [{ possibility: 2.0, stateID: 519 }],
    className: "Navy",
  },
  {
    stateID: 519,
    logText: "猎魔人的意志坚定，我不能贿赂他",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    sheriff: {
      observe: 9,
      defend: 9,
      technique: 9,
      desire: 9,
      winNextStateID: 521,
      nextSheriff: 6,
    },
    className: "Navy",
  },
  {
    stateID: 520,
    logText: "好像有人注意到我了",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 521,
    logText: "猎魔人迎来了他的末日",
    nextStates: [{ possibility: 2.0, stateID: 522 }],
    className: "Darkred",
  },
  {
    stateID: 522,
    logText: "“哼。”",
    nextStates: [{ possibility: 2.0, stateID: 523 }],
    className: "Navy",
  },
  {
    stateID: 523,
    logText: "我现在更容易被官方敌人发现（名声 +10）",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    className: "Navy",
    reputation: 10,
  },
  {
    stateID: 524,
    logText: "我的线人告诉我，审查局那帮家伙盯上我了！",
    nextStates: [{ possibility: 2.0, stateID: 525 }],
    className: "Navy",
  },
  {
    stateID: 525,
    logText: "可恶，怎么是这帮疯狗！",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 526,
    logText: "我直觉这几天会有不好的事情发生",
    nextStates: [{ possibility: 2.0, stateID: 527 }],
    className: "Navy",
  },
  {
    stateID: 527,
    logText: "如果是审查局的话，我想我没可能对付",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 528,
    logText: "我想我应该考虑是否换个城市生活",
    nextStates: [{ possibility: 2.0, stateID: 202 }],
    className: "Navy",
  },
  {
    stateID: 529,
    logText: "审查局找到我了！",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    className: "Navy",
  },
  {
    stateID: 530,
    logText: "一群人，奇装异服，将我的住所团团包围",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    className: "Navy",
  },
  {
    stateID: 531,
    logText: "我当然不愿束手就擒，然而我在围攻之下很快败北",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    className: "Navy",
  },
  {
    stateID: 532,
    logText: "“你被‘征用’了。”",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    className: "Navy",
  },
  {
    stateID: 533,
    logText: "我没有入狱，",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 534,
    logText: "相反，我成为了，",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 535,
    logText: "成为了他人的燃料。",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 536,
    logText: "达成结局：燃料",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 537,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 538,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 539,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 540,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 541,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 542,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 543,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 544,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 545,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 546,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 547,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 548,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 549,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 550,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 551,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 552,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 553,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 554,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 555,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 556,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 557,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 558,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 559,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 560,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 561,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 562,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 563,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 564,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 565,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 566,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 567,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 568,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 569,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 570,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 571,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 572,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 573,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 574,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 575,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 576,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 577,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 578,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 579,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 580,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 581,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 582,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 583,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 584,
    logText: "这是一枚小巧的心形吊坠，戴上后你感到躁动不安",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    insertEnd: true,
  },
  {
    stateID: 585,
    logText: "据说目盲之神曾为洞察之神，这是其曾经信徒用于祭拜的人偶",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    insertEnd: true,
  },
  {
    stateID: 586,
    logText: "眼怪竟然变异出了黑色的晶状体，可它分明不透光啊！",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    insertEnd: true,
  },
  {
    stateID: 587,
    logText:
      "欧维古国的镜片可以用于勘破伪装，一名国王却以此发现自己的子嗣并非自己的子嗣",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
    insertEnd: true,
  },
  {
    stateID: 588,
    logText: "获得诡物：古神人偶(5目)",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 589,
    logText: "获得5级心性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 590,
    logText: "获得5级珠性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 591,
    logText: "获得5级水性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 592,
    logText: "【我需要适当性相的诡物来压制敌人】",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 593,
    logText: "获得诡物：眼怪的黑色晶状体(4目)",
    nextStates: [{ possibility: 2.0, stateID: 586 }],
  },
  {
    stateID: 594,
    logText: "获得4级心性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 595,
    logText: "获得4级珠性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 596,
    logText: "获得4级水性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 597,
    logText: "获得诡物：古老的单片眼镜(3目)",
    nextStates: [{ possibility: 2.0, stateID: 587 }],
  },
  {
    stateID: 598,
    logText: "获得诡物：躁动的纪念品(3心)",
    nextStates: [{ possibility: 2.0, stateID: 584 }],
  },
  {
    stateID: 599,
    logText: "获得3级珠性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 600,
    logText: "获得3级水性相诡物",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    insertEnd: true,
  },
  {
    stateID: 601,
    logText: "与3级目性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 12,
      defend: 2,
      technique: 3,
      desire: 3,
      gain: 0.5,
      gainState: 195,
      getTreasureStateID: 597,
      level: 3,
    },
  },
  {
    stateID: 602,
    logText: "与3级心性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 3,
      defend: 12,
      technique: 2,
      desire: 3,
      gain: 0.5,
      gainState: 196,
      getTreasureStateID: 598,
      level: 3,
    },
  },
  {
    stateID: 603,
    logText: "与3级珠性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 3,
      defend: 3,
      technique: 12,
      desire: 2,
      gain: 0.5,
      gainState: 197,
      getTreasureStateID: 599,
      level: 3,
    },
  },
  {
    stateID: 604,
    logText: "与3级水性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 2,
      defend: 3,
      technique: 3,
      desire: 12,
      gain: 0.5,
      gainState: 198,
      getTreasureStateID: 600,
      level: 3,
    },
  },
  {
    stateID: 605,
    logText: "抽取3级敌人……（如果出现在文本框请反馈给开发者）",
    nextStates: [
      { possibility: 0.25, stateID: 601 },
      { possibility: 0.25, stateID: 602 },
      { possibility: 0.25, stateID: 603 },
      { possibility: 2.0, stateID: 604 },
    ],
    hidden: true,
  },
  {
    stateID: 606,
    logText: "抽取4级敌人……（如果出现在文本框请反馈给开发者）",
    nextStates: [
      { possibility: 0.25, stateID: 616 },
      { possibility: 0.25, stateID: 608 },
      { possibility: 0.25, stateID: 609 },
      { possibility: 2.0, stateID: 610 },
    ],
    hidden: true,
  },
  {
    stateID: 607,
    logText: "眼魔达到某个了临界点，突然变得狂暴",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 25,
      defend: 5,
      technique: 5,
      desire: 5,
      gain: 0.7,
      gainState: 191,
      getTreasureStateID: 593,
      level: 4,
    },
  },
  {
    stateID: 608,
    logText: "与4级心性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 5,
      defend: 25,
      technique: 5,
      desire: 5,
      gain: 0.7,
      gainState: 192,
      getTreasureStateID: 594,
      level: 4,
    },
  },
  {
    stateID: 609,
    logText: "与4级珠性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 5,
      defend: 5,
      technique: 25,
      desire: 5,
      gain: 0.7,
      gainState: 193,
      getTreasureStateID: 595,
      level: 4,
    },
  },
  {
    stateID: 610,
    logText: "与4级水性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 5,
      defend: 5,
      technique: 5,
      desire: 25,
      gain: 0.7,
      gainState: 194,
      getTreasureStateID: 596,
      level: 4,
    },
  },
  {
    stateID: 611,
    logText: "与5级目性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 30,
      defend: 10,
      technique: 10,
      desire: 10,
      gain: 0.8,
      gainState: 191,
      getTreasureStateID: 588,
      level: 5,
    },
  },
  {
    stateID: 612,
    logText: "与5级心性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 10,
      defend: 30,
      technique: 10,
      desire: 10,
      gain: 0.8,
      gainState: 192,
      getTreasureStateID: 589,
      level: 5,
    },
  },
  {
    stateID: 613,
    logText: "与5级珠性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 10,
      defend: 10,
      technique: 30,
      desire: 10,
      gain: 0.8,
      gainState: 193,
      getTreasureStateID: 590,
      level: 5,
    },
  },
  {
    stateID: 614,
    logText: "与5级水性相敌人战斗",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
    enemy: {
      observe: 10,
      defend: 10,
      technique: 10,
      desire: 30,
      gain: 0.8,
      gainState: 194,
      getTreasureStateID: 591,
      level: 5,
    },
  },
  {
    stateID: 615,
    logText: "抽取5级敌人……（若出现在消息框请反馈给开发者）",
    nextStates: [
      { possibility: 0.25, stateID: 611 },
      { possibility: 0.25, stateID: 612 },
      { possibility: 0.25, stateID: 613 },
      { possibility: 2.0, stateID: 614 },
    ],
    hidden: true,
  },
  {
    stateID: 616,
    logText: "我深入森林，希望找到隐藏的秘密，提升对世界的理解。",
    nextStates: [{ possibility: 2.0, stateID: 617 }],
    skipStateID: 607,
  },
  {
    stateID: 617,
    logText: "当我穿过交织着的灌木丛时，我感到一股不安的情绪在心中蔓延开来。",
    nextStates: [{ possibility: 2.0, stateID: 618 }],
  },
  {
    stateID: 618,
    logText: "整个森林似乎都活了起来，树叶的摩擦声和树枝的嘎吱声在周围回响着。",
    nextStates: [{ possibility: 2.0, stateID: 619 }],
  },
  {
    stateID: 619,
    logText: "突然间，我听到了一声低沉的咆哮声，一双闪烁的眼睛出现在黑暗中。",
    nextStates: [{ possibility: 2.0, stateID: 620 }],
  },
  {
    stateID: 620,
    logText: "我拔出了仪式刀，准备战斗",
    nextStates: [{ possibility: 2.0, stateID: 621 }],
  },
  {
    stateID: 621,
    logText:
      "当怪物向前迈步时，我看到这是一种眼魔，它的球形身体上布满了蠕动的触手。",
    nextStates: [{ possibility: 2.0, stateID: 622 }],
  },
  {
    stateID: 622,
    logText: "我大喊一声，冲了上去，准备进行战斗。",
    nextStates: [{ possibility: 2.0, stateID: 623 }],
  },
  {
    stateID: 623,
    logText: "战斗激烈而惨烈。眼魔用触手猛烈地冲击，瞄准我防守的薄弱之处",
    nextStates: [{ possibility: 2.0, stateID: 624 }],
  },
  {
    stateID: 624,
    logText: "我不断闪避和绕开，每次都在机会来临时用刀反击。",
    nextStates: [{ possibility: 2.0, stateID: 625 }],
  },
  {
    stateID: 625,
    logText: "战斗持续了许久，双方都精疲力竭",
    nextStates: [{ possibility: 2.0, stateID: 607 }],
  },
  {
    stateID: 626,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 627,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 628,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 629,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 630,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 631,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 632,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 633,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 634,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 635,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 636,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 637,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 638,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 639,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 640,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 641,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 642,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 643,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 644,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 645,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 646,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 647,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 648,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 649,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 650,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 651,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 652,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 653,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 654,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 655,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 656,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 657,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 658,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 659,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 660,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 0 }],
  },
  {
    stateID: 661,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 662,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 663,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 664,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 665,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 666,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 667,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 668,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 669,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 670,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 671,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 672,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 673,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 674,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 675,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 676,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 677,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 678,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 679,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 680,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 681,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 682,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 683,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 684,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 685,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 686,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 687,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 688,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 689,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 690,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 691,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 692,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 693,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 694,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 695,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 696,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 697,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 698,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 699,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 700,
    logText: "我要看哪本书？",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 701,
    logText: "【世界上许多角落藏着密教团体】",
    nextStates: [{ possibility: 2.0, stateID: 702 }],
  },
  {
    stateID: 702,
    logText: "【“诡物”，世间奇诡之物】",
    nextStates: [{ possibility: 2.0, stateID: 703 }],
  },
  {
    stateID: 703,
    logText: "【我可以从某些敌人那里获取“诡物”】",
    nextStates: [{ possibility: 2.0, stateID: 704 }],
  },
  {
    stateID: 704,
    logText: "【如果我能找到与我对应性相的三个诡物，就有机会进入港湾】",
    nextStates: [{ possibility: 2.0, stateID: 705 }],
  },
  {
    stateID: 705,
    logText: "【“港湾”是一切升变者最终归宿】",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 706,
    logText: "出现bug了！",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 707,
    logText:
      "目之性相体现了感知、视觉和理解的概念，它的力量被认为与神秘的眼魔生物有关。",
    nextStates: [{ possibility: 2.0, stateID: 708 }],
  },
  {
    stateID: 708,
    logText:
      "追求目之性相的人寻求从那些存在于“无相世界”中的生物中获得知识和洞见，并以一种超越凡人的方式运用它们的力量",
    nextStates: [{ possibility: 2.0, stateID: 709 }],
  },
  {
    stateID: 709,
    logText:
      "他们相信眼睛是灵魂的窗口，通过利用这种力量，他们可以揭示隐藏的秘密，获得更深层次的宇宙理解。",
    nextStates: [{ possibility: 2.0, stateID: 710 }],
  },
  {
    stateID: 710,
    logText: "然而，追求目之性相的代价巨大",
    nextStates: [{ possibility: 2.0, stateID: 711 }],
  },
  {
    stateID: 711,
    logText:
      "“无相世界”的生物神秘莫测且危险，而那些试图了解它们的人常常会被自己所观察之物所吞噬",
    nextStates: [{ possibility: 2.0, stateID: 712 }],
  },
  {
    stateID: 712,
    logText:
      "目之性相不容小觑，那些敢于深入研究它的神秘学者必须做好付出巨大代价的准备。",
    nextStates: [{ possibility: 2.0, stateID: 713 }],
  },
  {
    stateID: 713,
    logText: "——你会追求目之性相，揭示它的秘密，",
    nextStates: [{ possibility: 2.0, stateID: 714 }],
  },
  {
    stateID: 714,
    logText: "——还是会远离它诱人的凝视，选择其他通向港湾之路？",
    nextStates: [{ possibility: 2.0, stateID: 715 }],
  },
  {
    stateID: 715,
    logText: "选择权在你手中，但要小心——你始终被注视着。",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 716,
    logText: "我购买了书籍：《高谈阔论：何为洞察》",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    bookStateID: 707,
  },
  {
    stateID: 717,
    logText: "我购买了书籍：《深渊之力：运动的奥义》",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    bookStateID: 751,
  },
  {
    stateID: 718,
    logText: "我购买了书籍：《欲望、诱惑、沉溺》",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    bookStateID: 760,
  },
  {
    stateID: 719,
    logText: "我购买了书籍：《珠之性相：危险与机遇》",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
    bookStateID: 770,
  },
  {
    stateID: 720,
    logText: "按照书中记载，我将诡物与身心投入了升变的仪式",
    nextStates: [{ possibility: 2.0, stateID: 721 }],
  },
  {
    stateID: 721,
    logText: "一股撕裂感从灵魂深处传来",
    nextStates: [{ possibility: 2.0, stateID: 722 }],
  },
  {
    stateID: 722,
    logText: "我突然失去了对身体的感知",
    nextStates: [{ possibility: 2.0, stateID: 723 }],
  },
  {
    stateID: 723,
    logText: "我看到了——",
    nextStates: [{ possibility: 2.0, stateID: 724 }],
  },
  {
    stateID: 724,
    logText: "坟墓——",
    nextStates: [{ possibility: 2.0, stateID: 725 }],
  },
  {
    stateID: 725,
    logText: "我失败了？",
    nextStates: [{ possibility: 2.0, stateID: 726 }],
  },
  {
    stateID: 726,
    logText: "不，我逐渐恢复了……感知",
    nextStates: [{ possibility: 2.0, stateID: 727 }],
  },
  {
    stateID: 727,
    logText: "但不只是恢复，我看到了从前未曾看到的景象",
    nextStates: [{ possibility: 2.0, stateID: 728 }],
  },
  {
    stateID: 728,
    logText: "原来……港湾并不是某个具体的地点",
    nextStates: [{ possibility: 2.0, stateID: 729 }],
  },
  {
    stateID: 729,
    logText: "或者说，我们一直都在港湾之中",
    nextStates: [{ possibility: 2.0, stateID: 730 }],
  },
  {
    stateID: 730,
    logText: "我成功了",
    nextStates: [{ possibility: 2.0, stateID: 731 }],
  },
  {
    stateID: 731,
    logText: "达成结局：升变",
    nextStates: [{ possibility: 2.0, stateID: 732 }],
  },
  {
    stateID: 732,
    logText:
      "感谢你游玩我的游戏！未来还会有更多的剧情、分支、职业等更新，敬请期待！",
    nextStates: [{ possibility: 2.0, stateID: end }],
  },
  {
    stateID: 733,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 734,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 735,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 736,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 737,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 738,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 739,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 740,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 741,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 742,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 743,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 744,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 745,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 746,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 747,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 748,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 749,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 750,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 751,
    logText:
      "心之性相是一种强大的力量，存在于所有生命体中，但只有少数人能够充分利用其潜力。",
    nextStates: [{ possibility: 2.0, stateID: 752 }],
  },
  {
    stateID: 752,
    logText: "它涉及力量、抵抗与坚韧意志。",
    nextStates: [{ possibility: 2.0, stateID: 753 }],
  },
  {
    stateID: 753,
    logText: "它是一种与身体密切相关的力量，通过严格的锻炼和训练而得以增强。",
    nextStates: [{ possibility: 2.0, stateID: 754 }],
  },
  {
    stateID: 754,
    logText: "但它也是一种与心灵和精神紧密关联的力量，",
    nextStates: [{ possibility: 2.0, stateID: 755 }],
  },
  {
    stateID: 755,
    logText:
      "那些能够抵制住基本欲望的诱惑并培养内在力量的人，将更好地掌握心之性相的全部力量。",
    nextStates: [{ possibility: 2.0, stateID: 756 }],
  },
  {
    stateID: 756,
    logText: "从本质上讲，心之性相代表着所有生命内在的力量，",
    nextStates: [{ possibility: 2.0, stateID: 757 }],
  },
  {
    stateID: 757,
    logText:
      "它是一种可以被引导和用于实现自己目标的力量，不论这些目标是身体的、精神的还是心理的。",
    nextStates: [{ possibility: 2.0, stateID: 758 }],
  },
  {
    stateID: 758,
    logText: "但它并不是一个可以轻率地使用的力量，因为它起源于未知深渊，",
    nextStates: [{ possibility: 2.0, stateID: 759 }],
  },
  {
    stateID: 759,
    logText: "那些驾驭心之性相的人必须准备好面对这种古老力量的黑暗一面",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 760,
    logText: "水之性相是与水元素相关联的原则，代表着驱动人类行为的深层欲望和渴望。",
    nextStates: [{ possibility: 2.0, stateID: 761 }],
  },
  {
    stateID: 761,
    logText: "它是一种既诱人又危险的力量，吸引个体沉溺于它的潮流之中。",
    nextStates: [{ possibility: 2.0, stateID: 762 }],
  },
  {
    stateID: 762,
    logText:
      "水之性相的追随者们往往能激发他人的欲望，有时他们却也会沉溺于自己的欲望",
    nextStates: [{ possibility: 2.0, stateID: 763 }],
  },
  {
    stateID: 763,
    logText:
      "因此，水之性相也可能是危险或腐败的源头，因为它可能导致个体走向黑暗之路，",
    nextStates: [{ possibility: 2.0, stateID: 764 }],
  },
  {
    stateID: 764,
    logText: "引诱他们违背自己的良知，或是沉沦于纵情享乐之中",
    nextStates: [{ possibility: 2.0, stateID: 765 }],
  },
  {
    stateID: 765,
    logText: "在某些情况下，使用水之性相甚至可能会吸引邪恶实体或力量的注意，",
    nextStates: [{ possibility: 2.0, stateID: 766 }],
  },
  {
    stateID: 766,
    logText: "这些邪恶存在以欲望与沉沦为食，常常诱惑人们走向不归路",
    nextStates: [{ possibility: 2.0, stateID: 767 }],
  },
  {
    stateID: 767,
    logText: "总的来说，水之性相是一种强大而诱人的力量，代表了人类本质中的原始一面",
    nextStates: [{ possibility: 2.0, stateID: 768 }],
  },
  {
    stateID: 768,
    logText: "学会谨慎使用并掌握其力量者，可能开启新的秘密",
    nextStates: [{ possibility: 2.0, stateID: 769 }],
  },
  {
    stateID: 769,
    logText: "而陷入诱惑者，则必然走向毁灭和腐败。",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 770,
    logText: "追随珠之性相可能会带来利益和危险",
    nextStates: [{ possibility: 2.0, stateID: 771 }],
  },
  {
    stateID: 771,
    logText: "一方面，它可以增强学者各种技能的掌握水平，为实现目标提供强大的工具",
    nextStates: [{ possibility: 2.0, stateID: 772 }],
  },
  {
    stateID: 772,
    logText:
      "另一方面，它与固执和追求完美有关，这可能会让追逐者走上危险而潜在破坏性的道路。",
    nextStates: [{ possibility: 2.0, stateID: 773 }],
  },
  {
    stateID: 773,
    logText:
      "如果一个追逐者过于沉迷于追求技术上的完美和掌握水平，他们可能会与社会隔绝，失去与现实的联系，",
    nextStates: [{ possibility: 2.0, stateID: 774 }],
  },
  {
    stateID: 774,
    logText: "他们可能会变得如此痴迷于他们的工艺，以至于忽略了他们的身体和心理健康",
    nextStates: [{ possibility: 2.0, stateID: 775 }],
  },
  {
    stateID: 775,
    logText: "甚至彻底断绝灵魂与肉体的联系，然后魂飞魄散",
    nextStates: [{ possibility: 2.0, stateID: 776 }],
  },
  {
    stateID: 776,
    logText: "此外，一些相关的神秘存在，可能会利用珠之性相的追随者对知识技艺的追逐",
    nextStates: [{ possibility: 2.0, stateID: 777 }],
  },
  {
    stateID: 777,
    logText: "将一些禁忌知识不加掩饰地传授给他们，而这很可能会导致疯狂与异变",
    nextStates: [{ possibility: 2.0, stateID: 778 }],
  },
  {
    stateID: 778,
    logText: "据说曾经有一名督查官意外获得了珠之性相的仪式",
    nextStates: [{ possibility: 2.0, stateID: 779 }],
  },
  {
    stateID: 779,
    logText: "最后却因为接受了不该接受的知识，导致当地督查厅全部毁灭",
    nextStates: [{ possibility: 2.0, stateID: 780 }],
  },
  {
    stateID: 780,
    logText: "总之，珠之性相可以成为追逐者的强大工具，但同时也带有重大的风险和危险",
    nextStates: [{ possibility: 2.0, stateID: 781 }],
  },
  {
    stateID: 781,
    logText:
      "追逐者必须小心不要过于沉迷于追求技术上的完美，而始终警惕潜伏在阴影中的潜在危险。",
    nextStates: [{ possibility: 2.0, stateID: 200 }],
  },
  {
    stateID: 782,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 783,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 784,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 785,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 786,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 787,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 788,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 789,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 790,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 791,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 792,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 793,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 794,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 795,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 796,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 797,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 798,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 799,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
  {
    stateID: 800,
    logText: "1111111111111111111111",
    nextStates: [{ possibility: 2.0, stateID: 199 }],
  },
];

export default issues;
