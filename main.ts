//% color="#AA278D" icon="\uf544" block="Brazo Robótico"
namespace brazoRobotico {
    let velocidad = 10

    let pinServo1 = AnalogPin.P0
    let pinServo2 = AnalogPin.P1
    let pinServo3 = AnalogPin.P2
    let pinServo4 = AnalogPin.P15

    function moverServoSuave(pin: AnalogPin, inicio: number, fin: number): void {
        if (inicio < fin) {
            for (let pos = inicio; pos <= fin; pos++) {
                pins.servoWritePin(pin, pos)
                basic.pause(velocidad)
            }
        } else {
            for (let pos = inicio; pos >= fin; pos--) {
                pins.servoWritePin(pin, pos)
                basic.pause(velocidad)
            }
        }
    }

    /**
     * Configura los pines donde están conectados los servomotores.
     * @param servo1 pin del servo 1
     * @param servo2 pin del servo 2
     * @param servo3 pin del servo 3
     * @param servo4 pin del servo 4
     */
    //% block="configurar pines servo 1 %servo1 servo 2 %servo2 servo 3 %servo3 servo 4 %servo4"
    //% servo1.defl=AnalogPin.P0
    //% servo2.defl=AnalogPin.P1
    //% servo3.defl=AnalogPin.P2
    //% servo4.defl=AnalogPin.P15
    export function configurarPines(servo1: AnalogPin, servo2: AnalogPin, servo3: AnalogPin, servo4: AnalogPin): void {
        pinServo1 = servo1
        pinServo2 = servo2
        pinServo3 = servo3
        pinServo4 = servo4
    }

    /**
     * Configura la velocidad de movimiento.
     * Entre mayor sea el número, más lento se moverá el servo.
     * @param nuevaVelocidad pausa entre cada grado en milisegundos
     */
    //% block="configurar velocidad %nuevaVelocidad ms"
    //% nuevaVelocidad.defl=10
    export function configurarVelocidad(nuevaVelocidad: number): void {
        velocidad = nuevaVelocidad
    }

    /**
     * Mueve el servo 1 desde un ángulo inicial hasta un ángulo final.
     * @param inicio ángulo inicial
     * @param fin ángulo final
     */
    //% block="mover servo 1 de %inicio a %fin grados"
    //% inicio.defl=70
    //% fin.defl=120
    export function moverServo1(inicio: number, fin: number): void {
        moverServoSuave(pinServo1, inicio, fin)
    }

    /**
     * Mueve el servo 2 desde un ángulo inicial hasta un ángulo final.
     * @param inicio ángulo inicial
     * @param fin ángulo final
     */
    //% block="mover servo 2 de %inicio a %fin grados"
    //% inicio.defl=80
    //% fin.defl=120
    export function moverServo2(inicio: number, fin: number): void {
        moverServoSuave(pinServo2, inicio, fin)
    }

    /**
     * Mueve el servo 3 desde un ángulo inicial hasta un ángulo final.
     * @param inicio ángulo inicial
     * @param fin ángulo final
     */
    //% block="mover servo 3 de %inicio a %fin grados"
    //% inicio.defl=135
    //% fin.defl=90
    export function moverServo3(inicio: number, fin: number): void {
        moverServoSuave(pinServo3, inicio, fin)
    }

    /**
     * Mueve el servo 4 desde un ángulo inicial hasta un ángulo final.
     * @param inicio ángulo inicial
     * @param fin ángulo final
     */
    //% block="mover servo 4 de %inicio a %fin grados"
    //% inicio.defl=90
    //% fin.defl=50
    export function moverServo4(inicio: number, fin: number): void {
        moverServoSuave(pinServo4, inicio, fin)
    }
}