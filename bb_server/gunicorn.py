from gevent import monkey
monkey.patch_all()


debug = True
loglevel = 'debug'
workers = 4
bind = "127.0.0.1:8000"
worker_class = 'gevent'
threads = 4
