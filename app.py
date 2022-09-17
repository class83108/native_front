#源数据
s = [{'name':'leader-1','belong_to':None},{'name':'jack','belong_to':'leader-2'},{'name':'lili','belong_to':'leader-1'},{'name':'leader-2','belong_to':None},{'name':'Tom', 'belong_to':'leader-1'}]
#目标数据
d = [
    {'name':'leader-1', 'team':[{'name':'lili'},{'name':'Tom'}]},
    {'name':'leader-2', 'team':[{'name':'jack'}]}
]




list_leader = []
dict = {}

for i in s:
    if i['belong_to']:
        dict.setdefault(i['belong_to'],[])
        dict[i['belong_to']].append({'name':i['name']})
    #     {'leader-2': [{'name': 'jack'}], 'leader-1': [{'name': 'lili'}, {'name': 'Tom'}]}

    else:
        list_leader.append({'name':i['name'], 'team':[]})
#         [{'name': 'leader-1', 'team': []}, {'name': 'leader-2', 'team': []}]
for l in list_leader:
    if l['name'] in dict:
        l['team'] = dict[l['name']]

print(list_leader)
print(dict)




# def find_team(data):
#
#     leader_lst = []
#     s_dict = {}   #{'leader-1':[{'name':'lili'}]}
#     for d in data:
#         if d['belong_to']:
#             #隊員
#             #如果 key 在 字典中，返回对应的值。如果不在字典中，则插入 key 及设置的默认值 default，并返回 default ，default 默认值为 None
#             s_dict.setdefault(d['belong_to'],[])
#             s_dict[d['belong_to']].append({'name':d['name']})
#         else:
#             #隊長
#             leader_lst.append({'name':d['name'], 'team':[]})
#
#     for l in leader_lst:
#         print(l) #{'name': 'leader-1', 'team': []}
#         if l['name'] in s_dict:
#             print(l['name'])#leader-1
#             print(l['team'])#[]
#             l['team'] = s_dict[l['name']]
#
#     return leader_lst
#
# print(find_team(s))
# #[{'name': 'leader-1', 'team': [{'name': 'lili'}, {'name': 'Tom'}]}, {'name': 'leader-2', 'team': [{'name': 'jack'}]}]