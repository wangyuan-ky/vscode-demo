import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  // 这里执行插件被激活时的操作
  console.log("我被激活啦啦啦")

  // 1: 定义了一个命令(vscode.commands)
  // 2: vscode-demo.helloWorld 可以把它当做id
  let disposable = vscode.commands.registerCommand(
    "vscode-demo.helloWorld",
    () => {
      // 触发了一个弹出框
      vscode.window.showInformationMessage("第一个demo弹出信息!")
      vscode.window.showWarningMessage("第一个警告信息")
      vscode.window.showErrorMessage("第一个错误信息!")
    }
  )
  // 把这个对象放入上下文中, 使其生效
  context.subscriptions.push(disposable)
}

// 插件被销毁时调用的方法, 比如可以清除一些缓存, 释放一些内存
export function deactivate() {}
