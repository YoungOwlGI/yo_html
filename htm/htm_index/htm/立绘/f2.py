import os


def remove_character_from_filenames(folder_path, character_to_remove):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if character_to_remove in file:
                old_file_path = os.path.join(root, file)
                new_file_name = file.replace(character_to_remove, "")
                new_file_path = os.path.join(root, new_file_name)
                os.rename(old_file_path, new_file_path)


if __name__ == "__main__":
    folder_path = "D:\猫头鹰的文件\保留文件\nginx-1.26.0\html\htm\立绘\须弥"  # 替换为实际的文件夹路径
    character_to_remove = "1"
    remove_character_from_filenames(folder_path, character_to_remove)
    print("重命名操作完成。")
