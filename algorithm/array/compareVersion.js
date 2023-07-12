function compareVersion(versions) {
  function versionSort(version1, version2) {
    const v1 = version1.split(".");
    const v2 = version2.split(".");

    const len = Math.max(v1.length, v2.length);

    for (let i = 0; i < len; i++) {
      const item1 = v1[i] || 0;
      const item2 = v2[i] || 0;
      if (item1 < item2) {
        return 1;
      } else if (item1 > item2) {
        return -1;
      }
    }
    return 0;
  }

  return versions.sort(versionSort);
}

console.log(
  compareVersion(["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"])
);
