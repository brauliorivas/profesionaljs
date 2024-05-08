class Singleton {
    private static instance: Singleton;

    private constructor() {

    }

    static getInstance() { // Static quiere decir que no necesita instancia para ejecutarse
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default Singleton