class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso
  const mago = new Hero('Gandalf', 1000, 'mago');
  const guerreiro = new Hero('Aragorn', 87, 'guerreiro');
  const monge = new Hero('Shaolin', 30, 'monge');
  const ninja = new Hero('Naruto', 17, 'ninja');
  
  mago.atacar(); // O mago atacou usando magia
  guerreiro.atacar(); // O guerreiro atacou usando espada
  monge.atacar(); // O monge atacou usando artes marciais
  ninja.atacar(); // O ninja atacou usando shuriken
  