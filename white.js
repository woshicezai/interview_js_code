for (let i = 0; i < 10; i++) {
  try {
    if (Math.random() > 0.5) {
      throw Error(`random bigger than 0.5,current pos: ${i}`);
    }
  } catch (e) {
    console.log("cath in for", e);
  }
}
