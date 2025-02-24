'''
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
  return render_template('index.html')


@app.route('/run_python', methods=['POST'])
def run_python():
  # 假设前端发送了一个名为'input_data'的字段
  input_data = request.json['input_data']

  # 在这里执行你的Python代码
  # 比如，我们可以简单地将输入数据返回给前端
  output_data = f"你输入了：{input_data}"

  # 返回JSON响应给前端
  return jsonify({'output_data': output_data})


if __name__ == '__main__':
  app.run(debug=True)
'''

"""
def bubble_sort(nums):
  n = len(nums)
  for i in range(n):
    for j in range(0, n - i - 1):
      if nums[j] > nums[j + 1]:
        nums[j], nums[j + 1] = nums[j + 1], nums[j]


nums = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(nums)
print("排序后的数组:", nums)
"""

# #导入pyecharts库中的options模块
# from pyecharts import options as opts
# #导入pyecharts库中charts模块的Radar类
# from pyecharts.charts import Radar
# #导入pyecharts库中globals模块的ThemeType全局变量
# from pyecharts.globals import ThemeType
# #创建Radar类对象，并设置初始配置项，包括画布大小、图表主题和网页标题
# radar = Radar(init_opts=opts.InitOpts(
#     width='600px', height='400px',
#     theme=ThemeType.ESSOS, page_title='雷达图'))
# #添加雷达图数据，并设置线条样式配置项中的线条颜色
# radar.add(series_name='某员工', data=[[90, 60, 75, 85, 95]],
#     linestyle_opts=opts.LineStyleOpts(color='red'))
# #设置配置项
# radar.add_schema(
#     #设置雷达图指示器配置项列表，包括指示器名称和最大值
#     schema=[
#         opts.RadarIndicatorItem(name='管理能力', max_=100),
#         opts.RadarIndicatorItem(name='业务能力', max_=100),
#         opts.RadarIndicatorItem(name='组织能力', max_=100),
#         opts.RadarIndicatorItem(name='沟通能力', max_=100),
#         opts.RadarIndicatorItem(name='表达能力', max_=100),
#     ],
#     center=['50%', '60%'],						#设置雷达图中心坐标
#     #设置分割线配置项，包括显示分割线和分割线颜色
#     splitline_opt=opts.SplitLineOpts(is_show=True,
#         linestyle_opts=opts.LineStyleOpts(color='grey')),
#     #设置文本样式配置项中的文本颜色
#     textstyle_opts=opts.TextStyleOpts(color='black'),
# )
# #设置全局配置项
# radar.set_global_opts(
#     #设置标题配置项，包括图表标题及其位置
#     title_opts=opts.TitleOpts(title='某员工能力分析雷达图',
#         pos_left='center'),
#     #设置图例配置项，包括图例离画布右侧和顶部的距离
#     legend_opts=opts.LegendOpts(pos_right='35', pos_top='25'))
# radar.render('例3-5.html')

# from flask import Flask, request, jsonify, render_template
# from pyecharts import options as opts
# from pyecharts.charts import Radar
# from pyecharts.globals import ThemeType
#
# app = Flask(__name__)
#
#
# @app.route('/')
# def index():
#   return render_template('index.html')
#
#
# @app.route('/generate_radar', methods=['POST'])
# def generate_radar():
#   data = request.form.get('data')
#   data = eval(data)  # 将字符串转为列表
#
#   radar = Radar(init_opts=opts.InitOpts(width='600px', height='400px', theme=ThemeType.ESSOS))
#   radar.add(series_name='某员工', data=[data],
#             linestyle_opts=opts.LineStyleOpts(color='red'))
#   radar.add_schema(
#     schema=[
#       opts.RadarIndicatorItem(name='管理能力', max_=100),
#       opts.RadarIndicatorItem(name='业务能力', max_=100),
#       opts.RadarIndicatorItem(name='组织能力', max_=100),
#       opts.RadarIndicatorItem(name='沟通能力', max_=100),
#       opts.RadarIndicatorItem(name='表达能力', max_=100),
#     ]
#   )
#
#   return radar.render_embed()  # 返回雷达图的HTML代码
#
#
# if __name__ == '__main__':
#   app.run(debug=True)



# from flask import Flask, request, jsonify
# import json
# import matplotlib.pyplot as plt
# import numpy as np
# import os
#
# app = Flask(__name__)
#
# @app.route('/generate_radar', methods=['POST'])
# def generate_radar():
#     data = request.get_json().get('data')
#
#     # 转换为 float 类型并处理
#     values = [float(i) for i in data]
#     categories = ['管理能力', '业务能力', '组织能力', '沟通能力', '表达能力']
#
#     # 生成雷达图
#     N = len(categories)
#     angles = np.linspace(0, 2 * np.pi, N, endpoint=False).tolist()
#     values += values[:1]  # 再次添加第一个值，以闭合图形
#     angles += angles[:1]
#
#     # 绘图
#     fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))
#     ax.fill(angles, values, color='blue', alpha=0.25)
#     ax.set_yticklabels([])
#     ax.set_xticks(angles[:-1])
#     ax.set_xticklabels(categories)
#
#     # 保存图像
#     img_path = 'static/radar_chart.png'
#     plt.savefig(img_path, bbox_inches='tight')
#     plt.close()
#
#     return f'<img src="/{img_path}" alt="Radar Chart"/>'
#
# if __name__ == '__main__':
#     # 确保 static 目录存在
#     os.makedirs('static', exist_ok=True)
#     app.run(debug=True)



from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/add', methods=['POST'])
def add_numbers():
    data = request.get_json()
    num1 = float(data['num1'])  # 获取第一个数字
    num2 = float(data['num2'])  # 获取第二个数字
    result = num1 + num2  # 进行相加
    return jsonify(sum=result)  # 返回计算结果

if __name__ == '__main__':
    app.run(debug=True)
