export class Particle {
  id!: number;

  /**
   * Angulo da particula
   */
  ang!: number;

  /**
   * Váriação do angulo.
   * Ex: -2, 0, 1, 2
   */
  v_ang!: number;

  /**
   * Raio total.
   * Ex: de 0 à 400
   */
  r!: number;

  /**
   * Váriação do raio.
   * Ex: 0, 2
   * 0 - linha circular
   * 2 - linha aumentando o raio
   */
  v_r!: number;

  x!: number;

  y!: number;

  /**
   * Próxima particula a ser desenhada
   */
  next!: Particle;
}
