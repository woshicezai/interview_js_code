const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const path = require("path");
const babel = require("@babel/core");

const getModuleInfo = (file) => {
  //生成 ast
  const body = fs.readFileSync(file, "utf-8");
  const ast = parser.parse(body, {
    sourceType: "module", //表示我们解析的是 es6
  });
  //   console.log(ast.program.body);
  //分析依赖
  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file);
      const absPath = "./" + path.join(dirname, node.source.value);
      console.log("dirname", dirname);
      console.log("absPath", absPath);
      deps[node.source.value] = absPath;
    },
  });
  //语法转换为 es5
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"],
  });
  const moduleInfo = {
    file,
    deps,
    code,
  };
  //   console.log(moduleInfo);
  return moduleInfo;
};

/**
 * 分析入口文件后的所有文件依赖
 * !! 单文件入口分析
 * @param {*} entry
 */
const parseModules = (entry) => {
  const depsGraph = {};

  const traverseParse = (entry) => {
    const { file, deps = {}, code } = getModuleInfo(entry);
    depsGraph[file] = { deps, code };
    Object.keys(deps).forEach((file) => {
      traverseParse(deps[file]);
    });
  };

  traverseParse(entry);
  console.log(depsGraph);
  return depsGraph;
};

// getModuleInfo("./src/index.js");
// parseModules("./src/index.js");

const bundle = (entry) => {
  const depsGraph = JSON.stringify(parseModules(entry));
  return `(function (graph) {
    function require(path) {
      var exports = {};
      if (path === '${entry}') {
        eval(graph['${entry}'].code);
      } else {
        const absPath = graph["${entry}"].deps[path];
        eval(graph[absPath].code);
      }
      return exports;
    }
    require("${entry}");
  })(${depsGraph});`;
};

const build = (entry) => {
  const out = bundle(entry);
  fs.writeFileSync("bundle.js", out);
};

build("./src/index.js");
