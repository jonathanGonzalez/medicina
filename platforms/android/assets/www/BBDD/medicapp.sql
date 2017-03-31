-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2017 a las 20:30:10
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `medicapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ambulancias`
--

CREATE TABLE `ambulancias` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fechaRequerida` date NOT NULL,
  `horaRequerida` varchar(50) NOT NULL,
  `lugar` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ambulancias`
--

INSERT INTO `ambulancias` (`id`, `id_usuario`, `fechaRequerida`, `horaRequerida`, `lugar`, `descripcion`) VALUES
(2, 12, '2017-03-17', '11:00 am', 'Clí­nica la Presentación', 'me dieron de alta y necesito traslado hasta mi casa'),
(4, 13, '2017-03-17', '01:00 pm', 'Clinica Santillana', 'me dieron de alta y necesito traslado hasta mi casa'),
(6, 14, '2017-03-30', '10: 00 am', 'Calle 12 # 10- 10', 'me dieron de alta y necesito traslado hasta mi casa'),
(8, 15, '2017-03-24', '09:00 am', 'Calle 11 # 10-11', 'Necesito traslado hacia el Centro medico Especializado del centro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta`
--

CREATE TABLE `consulta` (
  `id` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `documento` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `dirección` varchar(40) NOT NULL,
  `tipoConsulta` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(30) NOT NULL,
  `sintomas` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `consulta`
--

INSERT INTO `consulta` (`id`, `id_usuario`, `usuario`, `nombre`, `tipo`, `documento`, `telefono`, `correo`, `dirección`, `tipoConsulta`, `fecha`, `hora`, `sintomas`) VALUES
(2, 2, 'Otro', 'Wilder Andres', 'CC', '1053864456', '3207249466', 'wilder.37@hotmail.com', 'Calle 73 #19-22', 'En consultorio', '2017-03-03', '15:20', 'Dolor de Cabeza intenso'),
(4, 3, 'Usuario app', 'Jhonathan', 'CC', '12345678', '1234456', 'jhonathangonzalez@gmail.com', 'Calle 72 # 27 -170', 'En Casa', '2017-03-02', '1970-01-01T20:20:00.000Z', 'Dolor en Peroné'),
(6, 6, 'Usuario app', 'Ana Maria', 'TI', '20010905100', '1234543', 'ana.jaramillo@gmail.com', 'Calle 73 #19-22', 'En Casa', '2017-03-01', '06:00', 'Repentinos Sobresaltos en el ritmo cardiaco'),
(8, 14, 'Usuario app', 'Pedro Ignacio', 'grfedsa', 'grfdsa', 'ytrew', 'sgsv@shsgs.com', 'Calle445', 'En consultorio', '2017-03-07', '15:30', 'me duele una pierna');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta_enfermeria`
--

CREATE TABLE `consulta_enfermeria` (
  `id` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `documento` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `tipoConsulta` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(30) NOT NULL,
  `sintomas` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `consulta_enfermeria`
--

INSERT INTO `consulta_enfermeria` (`id`, `id_usuario`, `usuario`, `nombre`, `tipo`, `documento`, `telefono`, `correo`, `direccion`, `tipoConsulta`, `fecha`, `hora`, `sintomas`) VALUES
(2, 11, 'Usuario app', 'Esmeralda', 'CC', '24730680', '3222000178', 'esmeralda@gmail.com', 'Calle 73 #19-22', 'En consultorio', '2017-03-17', '11:00 am', 'Necesito Cuidados para adulto mayor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermeros`
--

CREATE TABLE `enfermeros` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `documento` varchar(50) NOT NULL,
  `nacimiento` date NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `enfermeros`
--

INSERT INTO `enfermeros` (`id`, `nombres`, `apellidos`, `sexo`, `tipo`, `documento`, `nacimiento`, `telefono`, `correo`) VALUES
(1, 'Wilder Andrés', 'Palacios Martinez', 'Masculino', 'CC', '1053864456', '1998-06-17', '3207249466', 'wilder.37@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `id` int(11) NOT NULL,
  `id_registro` int(11) NOT NULL,
  `medicamentos` varchar(200) NOT NULL,
  `alergias` varchar(200) NOT NULL,
  `cirugias` varchar(200) NOT NULL,
  `eps` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`id`, `id_registro`, `medicamentos`, `alergias`, `cirugias`, `eps`) VALUES
(2, 2, 'Dolex Gripa', 'Acetaminofen', 'Ninguna', 'SaludVida'),
(4, 5, 'Acetaminofen', 'Dolex', 'No', 'SaludVida'),
(8, 6, 'Acetaminofen Jarabe', 'No', 'No', 'No tengo'),
(10, 14, 'Acetaminofen', 'al manÃ­', 'Cirugia de Corazon', 'SaludCoop'),
(14, 19, 'Noraver', 'Acetaminofen', 'No', 'Sanitas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellidos` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `documento` varchar(50) NOT NULL,
  `nacimiento` date NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `terminos` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `nombres`, `apellidos`, `sexo`, `tipo`, `documento`, `nacimiento`, `telefono`, `correo`, `password`, `terminos`) VALUES
(2, 'Wilder Andres', 'Palacios Martinez', 'Masculino', 'CC', '1053864456', '1998-06-17', '3207249466', 'wilder.37@hotmail.com', 'ejemplo', 1),
(3, 'Jhonathan', 'Gonzalez', 'Masculino', 'CC', '12345678', '2017-01-11', '1234456', 'jhonathangonzalez@gmail.com', '123jhonathan', 1),
(4, 'Ricardo andres', 'marin aguirre', 'masculino', 'CC', '1053863234', '2017-02-15', '123456', 'ricarmagu@hotmail.com', '123456', 1),
(5, 'Gabriel', 'Hernandez', 'Masculino', 'CC', '1234567890', '2017-02-23', '12345564', 'gabriel@hotmail.com', '123erty', 1),
(6, 'Ana Maria', 'Jaramillo Aristizabal', 'Femenino', 'TI', '20010905100', '2001-09-05', '1234543', 'ana.jaramillo@gmail.com', 'ayudaidonea', 1),
(7, 'Jorge', 'Aguirre', 'Masculino', 'CC', '1234567', '2010-12-17', '12345', 'jorge@hotmail.com', '123ewqas', 1),
(8, 'Nuevo', 'Nuevo', 'Nuevo', 'CC', '00000000', '2010-02-28', '111111111111', 'nuevo@nuevo.com', 'nuevo', 1),
(9, 'Santiago', 'Valencia', 'Masculino', 'CC', '10538990223', '2010-12-17', '12346758811111', 'santiago@valencia.com', '12345', 1),
(10, 'Natalia', 'Jaramillo', 'Femenino', 'CC', '1053878909', '1998-01-07', '3207765456', 'natalia@jaramillo.com', 'natalia', 1),
(11, 'Esmeralda', 'Martinez', 'Femenino', 'CC', '24730680', '1975-04-22', '3222000178', 'esmeralda@gmail.com', 'esmeralda', 1),
(12, 'Adriana', 'Martinez', 'Femenino', 'CC', '1051890098', '1995-10-02', '3105578909', 'adriana@gmail.com', 'adriana', 1),
(13, '', '', '', '', '', '0000-00-00', '', '', '', 0),
(14, 'Pedro Ignacio', 'rtswq', 'gefdwsa', 'grfedsa', 'grfdsa', '2017-03-04', 'ytrew', 'sgsv@shsgs.com', 'ytrewyt', 1),
(15, 'Mario Alexander', 'Mro Art', 'Masculino', 'CC', '10537899898', '1994-04-17', '12344321', 'mroart@design.com', 'mroart', 1),
(16, 'JointVenture', 'Empresa', 'Masculino', 'Nit', '10538990990-9', '2012-12-12', '89899090', 'info@jointventure.com', 'jointventure', 1),
(17, 'Santiago', 'Cardenas', 'Masculino', 'CC', '10538987666', '1997-10-01', '3102341233', 'santi@gmail.com', 'santi', 1),
(19, 'Jaycob', 'Duque', 'Masculino', 'CC', '1050910910', '1998-06-17', '8879090', 'jaycob@duqueinc.com', 'jaycobduque', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ambulancias`
--
ALTER TABLE `ambulancias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario3` (`id_usuario`);

--
-- Indices de la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `consulta_enfermeria`
--
ALTER TABLE `consulta_enfermeria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario2` (`id_usuario`);

--
-- Indices de la tabla `enfermeros`
--
ALTER TABLE `enfermeros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_registro` (`id_registro`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ambulancias`
--
ALTER TABLE `ambulancias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `consulta`
--
ALTER TABLE `consulta`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `consulta_enfermeria`
--
ALTER TABLE `consulta_enfermeria`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `enfermeros`
--
ALTER TABLE `enfermeros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ambulancias`
--
ALTER TABLE `ambulancias`
  ADD CONSTRAINT `id_usuario3` FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `consulta_enfermeria`
--
ALTER TABLE `consulta_enfermeria`
  ADD CONSTRAINT `id_usuario2` FOREIGN KEY (`id_usuario`) REFERENCES `registro` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD CONSTRAINT `id_registro` FOREIGN KEY (`id_registro`) REFERENCES `registro` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
