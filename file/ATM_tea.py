balance = 0
while True:
    print("""
    欢迎使用银行账户管理系统！
    1. 存款
    2. 取款
    3. 查询余额
    4. 退出系统
    """)
    choice = input("请选择操作：")
    if choice == "1":
        deposit = float(input("请输入存款金额："))
        balance += deposit
        print("存款成功！当前余额为：", balance)
    elif choice == "2":
        withdraw = float(input("请输入取款金额："))
        if withdraw > balance:
            print("余额不足！")
        else:
            balance -= withdraw
            print("取款成功！当前余额为：", balance)
    elif choice == "3":
        print("当前余额为：", balance)
    elif choice == "4":
        break
    else:
        print("输入错误！请重新输入！")