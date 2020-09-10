// @ts-ignore
const fs = require("fs");
// @ts-ignore
const moment = require("moment-timezone");

const typesFilePath = "./timezones.ts";

const start = async () => {
  // @ts-ignore
  const timezones = moment.tz.names();

  await fs.unlink(typesFilePath, function () {});

  await fs.writeFile(typesFilePath, "", function () {});

  await fs.appendFile(
    typesFilePath,
    `// Generated at: ${moment().toISOString()}\n\nexport const timezones = [${timezones
      .map((timezone: string) => `"${timezone}"`)
      .join(",")}]\n\nexport enum Timezone { ${timezones
      .map(
        (timezone: string) =>
          `${timezone
            .replace("GMT-0", "GMTMinus0")
            .replace("Etc/GMT+0", "EtcGMTPlus0")
            .replace("Etc/GMT+1", "EtcGMTPlus1")
            .replace("Etc/GMT+10", "EtcGMTPlus10")
            .replace("Etc/GMT+11", "EtcGMTPlus11")
            .replace("Etc/GMT+12", "EtcGMTPlus12")
            .replace("Etc/GMT+2", "EtcGMTPlus2")
            .replace("Etc/GMT+3", "EtcGMTPlus3")
            .replace("Etc/GMT+4", "EtcGMTPlus4")
            .replace("Etc/GMT+5", "EtcGMTPlus5")
            .replace("Etc/GMT+6", "EtcGMTPlus6")
            .replace("Etc/GMT+7", "EtcGMTPlus7")
            .replace("Etc/GMT+8", "EtcGMTPlus8")
            .replace("Etc/GMT+9", "EtcGMTPlus9")
            .replace("Etc/GMT-0", "EtcGMTMinus0")
            .replace("Etc/GMT-1", "EtcGMTMinus1")
            .replace("Etc/GMT-10", "EtcGMTMinus10")
            .replace("Etc/GMT-11", "EtcGMTMinus11")
            .replace("Etc/GMT-12", "EtcGMTMinus12")
            .replace("Etc/GMT-13", "EtcGMTMinus13")
            .replace("Etc/GMT-14", "EtcGMTMinus14")
            .replace("Etc/GMT-2", "EtcGMTMinus2")
            .replace("Etc/GMT-3", "EtcGMTMinus3")
            .replace("Etc/GMT-4", "EtcGMTMinus4")
            .replace("Etc/GMT-5", "EtcGMTMinus5")
            .replace("Etc/GMT-6", "EtcGMTMinus6")
            .replace("Etc/GMT-7", "EtcGMTMinus7")
            .replace("Etc/GMT-8", "EtcGMTMinus8")
            .replace("Etc/GMT-9", "EtcGMTMinus9")
            .replace("/", "")
            .replace("/", "")
            .replace("/", "")
            .replace("/", "")
            .replace("-", "")
            .replace("-", "")
            .replace("-", "")
            .replace("_", "")
            .replace("_", "")
            .replace("_", "")
            .replace("_", "")
            .replace("+", "Plus")} = "${timezone}"`
      )
      .join(",")} }`,
    function () {}
  );

  console.log("Done");
};

start();
