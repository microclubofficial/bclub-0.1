from flask import jsonify
from sqlalchemy import inspect
import datetime


def get_json(errorcode,msg,data):
    data_json={
        'resultcode':errorcode,
        'message':msg,
        'data':
            data
    }
    return jsonify(data_json)

def object_as_dict(obj):
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}

def time_diff(update_time):
    now = datetime.datetime.now()
    diff = now - update_time
    if int(diff.seconds)<=60:
        return str(diff.seconds)+'s'
    elif int(diff.seconds)<=3600:
        return str(int(diff.seconds//60))+'min'
    elif int(diff.days)==0:
        return str(int(diff.seconds//3600))+'hour'
    elif int(diff.days)<=7:
        return str(int(diff.days))+'day'
    return str(update_time)

def FindAndCount(Sql,**kwargs):
    print(kwargs,111111111111111111)
    count = Sql.query.filter_by(**kwargs).count()
    return count
