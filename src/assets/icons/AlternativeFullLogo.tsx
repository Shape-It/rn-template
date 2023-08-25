import * as React from 'react';
import Svg, { SvgProps, Path, G, Circle, Defs } from 'react-native-svg';

export const AlternativeFullLogoIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={200} height={47} fill="none" {...props}>
    <Path
      fill="#1B1B1B"
      d="M53.344 33.548c-1.434 0-2.87-.207-4.31-.626-1.434-.42-2.885-1.058-4.343-1.92v-5.296c1.037.81 2.362 1.555 3.965 2.246 1.609.685 3.172 1.028 4.682 1.028.636 0 1.207-.07 1.715-.224.508-.148.91-.367 1.22-.644.302-.284.46-.639.46-1.07 0-.644-.391-1.164-1.179-1.554-.78-.39-2.106-.786-3.966-1.194-2.554-.538-4.425-1.3-5.62-2.281-1.196-.981-1.796-2.322-1.796-4.018 0-1.348.379-2.518 1.136-3.517.759-.998 1.797-1.749 3.11-2.263 1.317-.514 2.798-.768 4.442-.768 1.54 0 2.962.219 4.269.644 1.3.431 2.589.999 3.866 1.696v4.728c-1.54-.946-3.01-1.608-4.409-2.004-1.393-.39-2.636-.585-3.726-.585-.694 0-1.29.089-1.795.26-.508.178-.9.42-1.179.727-.28.308-.42.656-.42 1.028 0 .538.275.958.816 1.253.543.296 1.44.568 2.695.81.344.106.7.195 1.055.26.361.065.741.154 1.137.26 2.39.62 4.129 1.465 5.202 2.547 1.079 1.075 1.615 2.423 1.615 4.042 0 2.21-.857 3.835-2.571 4.87-1.715 1.04-3.744 1.553-6.082 1.553l.011.012ZM200 33.366c-2.182.62-4.152.768-5.919.443-1.767-.325-3.166-1.105-4.187-2.346-1.021-1.241-1.533-2.896-1.533-4.97l.041-9.857h-3.826v-4.527h3.826s.118-3.452.118-6.607c.789-2.366 4.984-2.366 4.984 0v6.607h6.256v4.527h-6.256l-.041 9.821c0 .704.244 1.289.741 1.755.489.473 1.229.733 2.209.787.986.053 2.181-.19 3.587-.727v5.094ZM181.383 33.528c.199 0-2.177 0 0 0-.198 0-2.726.005-4.695.005V12.602h4.683l.05 6.195-.038 8.65c0 .62-.032 1.356.006 1.826-.038 1.786-.006 1.4-.006.238 0 1.212-1.306-.465-.012-.938l.012 2.1v2.855ZM152.869 33.132c-1.995 0-3.826-.497-5.505-1.496a10.82 10.82 0 0 1-3.948-4.042 11.008 11.008 0 0 1-1.434-5.495c0-1.968.49-3.877 1.475-5.579a10.958 10.958 0 0 1 3.989-4.018 10.543 10.543 0 0 1 5.423-1.478c1.726 0 3.341.39 4.846 1.17a11.084 11.084 0 0 1 3.79 3.233 11.01 11.01 0 0 1 2.012 4.568c.291 1.43.303 2.777.041 4.042h-16.427c.186.945.554 1.75 1.096 2.423a5.01 5.01 0 0 0 2.035 1.513c.811.337 1.68.502 2.613.502 1.008 0 2-.195 2.968-.585.968-.39 1.79-.934 2.455-1.637l4.548 1.253c-.851 1.696-2.222 3.055-4.105 4.083-1.889 1.023-3.843 1.537-5.861 1.537l-.011.006Zm5.621-13.09a5.716 5.716 0 0 0-1.055-2.18 5.567 5.567 0 0 0-1.954-1.596c-.787-.39-1.668-.585-2.653-.585-.986 0-1.872.195-2.671.585a5.428 5.428 0 0 0-1.971 1.596 5.716 5.716 0 0 0-1.055 2.18h11.365-.006ZM126.367 33.12c-1.964 0-3.785-.502-5.44-1.513-.836-.508-.601 8.602-1.031 13.335-1.578 2.367-3.538.843-4.019 0-.974-1.696-.356-20.923-.356-22.89 0-1.968.484-3.83 1.458-5.514a10.982 10.982 0 0 1 3.948-4.019c1.662-.998 3.476-1.495 5.44-1.495 1.966 0 3.78.497 5.441 1.495a11.136 11.136 0 0 1 3.966 4.042 10.765 10.765 0 0 1 1.475 5.496c0 1.968-.491 3.841-1.475 5.537a11.239 11.239 0 0 1-3.966 4.042c-1.661 1-3.475 1.496-5.441 1.496v-.012Zm0-4.81a5.692 5.692 0 0 0 3.051-.851 6.277 6.277 0 0 0 2.191-2.282 6.247 6.247 0 0 0 .817-3.132 6.248 6.248 0 0 0-.817-3.132 6.28 6.28 0 0 0-2.191-2.28 5.744 5.744 0 0 0-3.051-.852c-1.114 0-2.135.29-3.05.87a6.425 6.425 0 0 0-2.174 2.28 6.236 6.236 0 0 0-.799 3.108c0 1.13.262 2.175.799 3.133a6.01 6.01 0 0 0 2.192 2.28c.934.568 1.942.851 3.032.851v.006ZM67.836 1.559c.242-1.768 2.817-2.367 3.606 0 .475 2.24-.49 10.603.006 12.677a7.619 7.619 0 0 1 2.67-2.038c1.062-.497 2.258-.75 3.587-.75 1.54 0 2.992.342 4.344 1.027a8.04 8.04 0 0 1 3.248 2.99c.81 1.306 1.22 2.825 1.22 4.545v13.213h-5.185V21.382c0-1.022-.204-1.92-.618-2.689-.414-.768-.98-1.353-1.697-1.755a4.743 4.743 0 0 0-2.35-.609c-1.038 0-1.948.254-2.729.769-.787.514-1.394 1.211-1.837 2.103-.443.893-.659 1.886-.659 2.99v11.034h-5.184l1.578-31.665ZM99.434 33.536c-2.046 0-3.882-.52-5.504-1.554-1.621-1.034-2.43-2.753-2.43-5.153 0-1.507.337-2.754 1.014-3.735.676-.98 1.66-1.707 2.95-2.18 1.289-.473 2.811-.71 4.565-.71h6.222v-1.17c0-1.075-.424-1.873-1.276-2.38-.852-.515-1.966-.77-3.348-.77-1.172 0-2.175.196-3.008.586-.84.39-1.388 1.058-1.657 2.003l-4.944.042c.029-1.43.466-2.671 1.318-3.735.852-1.064 1.994-1.885 3.428-2.464 1.435-.58 3.014-.87 4.747-.87 1.732 0 3.289.29 4.764.87 1.475.579 2.66 1.394 3.551 2.446.893 1.052 1.336 2.275 1.336 3.676v14.791h-4.905v-2.665c-.56.756-1.434 1.442-2.629 2.062-1.196.62-2.595.928-4.187.928l-.007-.018Zm.439-4.284c1.038 0 2.046-.242 3.032-.727.985-.484 1.791-1.128 2.414-1.938.625-.81.938-1.696.938-2.665h-5.265c-1.008 0-1.848.136-2.514.402-.664.271-1.148.632-1.457 1.093-.31.46-.42.98-.338 1.578.08.81.426 1.388 1.038 1.737.612.349 1.328.526 2.152.526v-.006Z"
    />
    <Path fill="#000" d="M19.72 3.559a19.72 19.72 0 1 0 0 39.44V3.558Z" />
    <G filter="url(#a)">
      <Circle cx={19.61} cy={23.169} r={11.437} fill="#1B1B1B" />
    </G>
    <Defs></Defs>
  </Svg>
);
