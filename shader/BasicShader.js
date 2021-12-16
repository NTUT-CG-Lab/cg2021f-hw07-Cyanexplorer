
/**
 * Sobel Edge Detection (see https://youtu.be/uihBwtPIBxM)
 *
 * As mentioned in the video the Sobel operator expects a grayscale image as input.
 *
 */

const RGBA16UIShader = {

	vertexShader: /* glsl */`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		
		uniform sampler2D u_texture;
		varying vec2 vUv;

		void main() {
			vec4 color = texture2D(u_texture, vUv);
			float r = color.r;
			
			gl_FragColor =  vec4(r, r, r, 1.0);

		}`

};

export { RGBA16UIShader };
