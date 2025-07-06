import eel

@eel.expose
def running(data1,data2):
    result=7*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def radio1(data1,data2):
    result=4*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def radio2(data1,data2):
    result=4.5*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def walking(data1,data2):
    result=3.5*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def climbing(data1,data2):
    result=6*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def cycling(data1,data2):
    result=4*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def yoga(data1,data2):
    result=2.5*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def stretch(data1,data2):
    result=2.3*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def swimming(data1,data2):
    result=6*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def badminton(data1,data2):
    result=5.5*data2/60*data1*1.05
    return round(result,1)

@eel.expose
def tennis(data1,data2):
    result=4.5*data2/60*data1*1.05
    return round(result,1)

eel.init("web")
eel.start("undou.html")