def abrir_pinza():
    global posicion5
    # P2 abre
    posicion5 = pos3_inicial
    while posicion5 < pos3_final:
        pins.servo_write_pin(AnalogPin.P2, posicion5)
        basic.pause(velocidad)
        posicion5 += 1
def servo2_mov2():
    global posicion4
    # P1 regreso (140 → 160)
    posicion4 = pos2_final
    while posicion4 < pos2_inicial:
        pins.servo_write_pin(AnalogPin.P1, posicion4)
        basic.pause(velocidad)
        posicion4 += 1
def cerrar_pinza():
    global posicion6
    # P2 cierra
    posicion6 = pos3_final
    while posicion6 > pos3_inicial:
        pins.servo_write_pin(AnalogPin.P2, posicion6)
        basic.pause(velocidad)
        posicion6 += 0 - 1
def servo3_mov2():
    global posicion8
    # P2 abre
    posicion8 = pos4_final
    while posicion8 > pos4_inicial:
        pins.servo_write_pin(AnalogPin.P3, posicion8)
        basic.pause(velocidad)
        posicion8 += 0 - 1
def servo1_mov2():
    global posicion2
    # P0 regreso
    posicion2 = pos1_final
    while posicion2 > pos1_inicial:
        pins.servo_write_pin(AnalogPin.P0, posicion2)
        basic.pause(velocidad)
        posicion2 += 0 - 1
def servo3_mov1():
    global posicion7
    # P2 abre
    posicion7 = pos4_inicial
    while posicion7 < pos4_final:
        pins.servo_write_pin(AnalogPin.P3, posicion7)
        basic.pause(velocidad)
        posicion7 += 1
def servo2_mov1():
    global posicion3
    # P1 ida (160 → 140)
    posicion3 = pos2_inicial
    while posicion3 > pos2_final:
        pins.servo_write_pin(AnalogPin.P1, posicion3)
        basic.pause(velocidad)
        posicion3 += 0 - 1
# =========================
# FUNCIONES
# =========================
def servo1_mov1():
    global posicion
    # P0 ida
    posicion = pos1_inicial
    while posicion < pos1_final:
        pins.servo_write_pin(AnalogPin.P0, posicion)
        basic.pause(velocidad)
        posicion += 1
posicion = 0
posicion3 = 0
posicion7 = 0
posicion2 = 0
posicion8 = 0
posicion6 = 0
posicion4 = 0
posicion5 = 0
pos4_final = 0
pos4_inicial = 0
velocidad = 0
pos3_final = 0
pos3_inicial = 0
pos2_final = 0
pos2_inicial = 0
pos1_final = 0
pos1_inicial = 0
# =========================
# PARÁMETROS
# =========================
pos1_inicial = 90
pos1_final = 150
pos2_inicial = 160
pos2_final = 140
pos3_inicial = 40
pos3_final = 130
velocidad = 10
pos4_inicial = 90
pos4_final = 150
# =========================
# POSICIÓN INICIAL
# =========================
pins.servo_write_pin(AnalogPin.P0, pos1_inicial)
pins.servo_write_pin(AnalogPin.P1, pos2_inicial)
pins.servo_write_pin(AnalogPin.P2, pos3_inicial)
pins.servo_write_pin(AnalogPin.P3, pos4_inicial)
basic.show_icon(IconNames.YES)
# =========================
# CICLO PRINCIPAL
# =========================

def on_forever():
    abrir_pinza()
    servo1_mov1()
    servo2_mov1()
    cerrar_pinza()
    servo1_mov2()
    servo2_mov2()
    servo3_mov1()
    abrir_pinza()
    servo3_mov2()
basic.forever(on_forever)
