from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)
LOG_FILE = 'say_log.json'

# 初始化日志文件
if not os.path.exists(LOG_FILE):
    with open(LOG_FILE, 'w') as f:
        json.dump([], f)


@app.route('/comments', methods=['GET'])
def get_comments():
    try:
        with open(LOG_FILE, 'r') as f:
            print(f"文件内容: {f.read()}")  # 添加这行调试语句
            f.seek(0)  # 将文件指针移回开头，因为上面读取后指针在末尾
            comments = json.load(f)
        comments.sort(key=lambda x: x.get('timestamp', ''), reverse=True)
        return jsonify(comments)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/comments', methods=['POST'])
def add_comment():
    try:
        data = request.get_json()
        # 添加时间戳
        data['timestamp'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        with open(LOG_FILE, 'r') as f:
            comments = json.load(f)
        comments.append(data)
        with open(LOG_FILE, 'w') as f:
            json.dump(comments, f, indent=2)
        return jsonify({'message': 'Comment added successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')