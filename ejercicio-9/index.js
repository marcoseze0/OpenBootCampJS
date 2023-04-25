const logger = require('./logger')
// logger.log('hola estoy saliendo por pantalla');
// logger.info('Mensaje Informativo')
// logger.debug('Esto es un mensaje de Debugg')
// logger.warn('Mensaje de Advertencia')
// logger.error('Esto es un error')

const email = 'marcaos87eze@gmail.com';

const validarEmail = () => {
    try {
        if (email === 'marcos87eze@gmail.com') {
            logger.info('email correcto')
            return true;
        }

    } catch (e) {
        logger.error('Error de Validacion')
        return false;
    }

    finally {
        console.log('Validacion realizada');
    }
}


console.log(validarEmail());
