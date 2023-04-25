const myFuncion = val => {
    if (typeof val === 'number') {
        return 2 * val
    }
    throw new Error('El valor debe ser de tipo numero');
}




try {
    console.log("Seejecuta normalmente");
    const elDoble = myFuncion('ala')

} catch (e) {
    console.log(e);
}

finally {
    console.log('Esto se realiza siempre');
}



        