from flask import Flask, request, jsonify
import mysql.connector
import bcrypt

app = Flask(__name__)

# 配置数据库连接
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'xiaomty',  # 请根据您的配置修改
    'database': 'youngowl'
}

@app.route('/api/validate', methods=['POST'])
def validate_user():
    # 获取客户端发送的 JSON 数据
    data = request.get_json()

    phone_num = data.get('phone_num')
    password = data.get('password')

    # 数据验证（基本检查）
    if not all([phone_num, password]):
        return jsonify({"status": "error", "message": "所有字段都必须填写"}), 400

    # 连接数据库
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # 查询数据库以验证用户信息
        query = """
            SELECT * FROM users WHERE phone_num = %s
        """
        cursor.execute(query, (phone_num,))
        user = cursor.fetchone()

        if user:
            # 比对密码，注意：数据库中保存的是加密后的密码
            if bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
                # 如果密码匹配，返回成功消息
                return jsonify({
                    "status": "success",
                    "message": f"欢迎，{phone_num}！",
                    "user": user
                })
            else:
                # 密码不匹配
                return jsonify({"status": "error", "message": "密码错误"}), 401
        else:
            # 如果没有找到匹配的用户
            return jsonify({"status": "error", "message": "未找到匹配的用户信息"}), 404

    except mysql.connector.Error as err:
        return jsonify({"status": "error", "message": f"数据库连接错误: {err}"}), 500

    finally:
        # 确保连接被关闭
        if conn.is_connected():
            cursor.close()
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)
