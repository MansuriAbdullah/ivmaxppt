content = open(r'c:\Users\DELL\Desktop\ivamaxppt\src\App.jsx', encoding='utf-8').read()
content = content.replace("'Playfair Display',serif", "'DM Serif Display',serif")
open(r'c:\Users\DELL\Desktop\ivamaxppt\src\App.jsx', 'w', encoding='utf-8').write(content)
print('Font replace done')
