productoproductoestado_pagoferramas_db-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-05-2024 a las 02:55:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concfcqa_ferramas_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_cat` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 0,
  `id_usr` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_cat`, `nombre`, `estado`, `id_usr`, `fecha_creacion`) VALUES
(1, 'Herramientas', 1, 2, '2024-05-18 00:00:00'),
(2, 'Materiales de construcción', 1, 1, '2024-05-18 00:00:00'),
(3, 'Electricidad', 1, 2, '2024-05-18 00:00:00'),
(4, 'Jardinería', 1, 1, '2024-05-18 00:00:00'),
(5, 'Plomería', 1, 2, '2024-05-18 00:00:00'),
(6, 'Pintura y decoración', 1, 1, '2024-05-18 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id_detalle_pedido` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` int(11) NOT NULL DEFAULT 0,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `divisas`
--

CREATE TABLE `divisas` (
  `codigo_divisa` varchar(3) NOT NULL,
  `nombre_divisa` varchar(50) DEFAULT NULL,
  `valor` decimal(18,2) DEFAULT NULL,
  `fecha_actual` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `divisas`
--

INSERT INTO `divisas` (`codigo_divisa`, `nombre_divisa`, `valor`, `fecha_actual`) VALUES
('USD', 'Dólar estadounidense', 897.11, '2024-05-21 18:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_pago`
--

CREATE TABLE `estado_pago` (
  `id_estadopago` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id_ma` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 0,
  `id_usr` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id_ma`, `nombre`, `estado`, `id_usr`, `fecha_creacion`) VALUES
(1, 'Stanley', 1, 1, '0000-00-00 00:00:00'),
(2, 'Truper', 1, 1, '0000-00-00 00:00:00'),
(3, 'Bellota', 1, 1, '0000-00-00 00:00:00'),
(4, 'Pretul', 1, 1, '0000-00-00 00:00:00'),
(6, 'Bahco', 1, 1, '0000-00-00 00:00:00'),
(7, 'DeWalt', 1, 1, '0000-00-00 00:00:00'),
(8, 'Bosch', 1, 1, '0000-00-00 00:00:00'),
(9, 'Makita', 1, 2, '0000-00-00 00:00:00'),
(10, 'Milwaukee', 1, 1, '0000-00-00 00:00:00'),
(11, 'Skil', 1, 2, '0000-00-00 00:00:00'),
(12, 'Ladrillera Santafé', 1, 1, '0000-00-00 00:00:00'),
(13, 'BioBio', 1, 2, '0000-00-00 00:00:00'),
(14, 'Polpaico', 1, 2, '0000-00-00 00:00:00'),
(15, 'Transex', 1, 1, '0000-00-00 00:00:00'),
(16, 'Helvex', 1, 2, '0000-00-00 00:00:00'),
(17, 'Briggs', 1, 1, '0000-00-00 00:00:00'),
(18, 'American Standard', 1, 2, '0000-00-00 00:00:00'),
(19, 'Foset', 1, 1, '0000-00-00 00:00:00'),
(20, 'Conduit', 1, 2, '0000-00-00 00:00:00'),
(21, 'Bticino', 1, 1, '0000-00-00 00:00:00'),
(22, 'Leviton', 1, 2, '0000-00-00 00:00:00'),
(23, 'Tramontina', 1, 1, '0000-00-00 00:00:00'),
(24, 'Terracota', 1, 2, '0000-00-00 00:00:00'),
(25, 'Nutriplant', 1, 1, '0000-00-00 00:00:00'),
(26, 'Cerámica Talavera', 1, 2, '0000-00-00 00:00:00'),
(27, 'Fertiplus', 1, 1, '0000-00-00 00:00:00'),
(28, 'Fertisoil', 1, 2, '0000-00-00 00:00:00'),
(29, 'Fertimax', 1, 1, '0000-00-00 00:00:00'),
(30, 'Ceresita', 1, 2, '0000-00-00 00:00:00'),
(31, 'Dcolor', 1, 2, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo_pago`
--

CREATE TABLE `metodo_pago` (
  `id_mpago` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `id_pago` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `fecha_pago` datetime NOT NULL,
  `id_mpago` int(11) NOT NULL,
  `monto_total` int(11) NOT NULL DEFAULT 0,
  `id_estadopago` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL,
  `id_usr` int(11) NOT NULL,
  `fecha_pedido` datetime NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 0,
  `id_mpago` int(11) NOT NULL,
  `id_tipo_entrega` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio_unitario` int(11) NOT NULL DEFAULT 0,
  `stock` int(11) NOT NULL,
  `id_ma` int(11) NOT NULL,
  `id_scat` int(11) NOT NULL,
  `id_usr` int(11) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `modificado_por` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `descripcion`, `precio_unitario`, `stock`, `id_ma`, `id_scat`, `id_usr`, `estado`, `fecha_creacion`, `fecha_modificacion`, `modificado_por`) VALUES
(4, 'Martillo de Peña', 'Martillo para trabajos de Hogar y Carpinteria', 12000, 10, 1, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(5, 'Cemento Polpaico Gris', 'Cemento gris para construcción', 25000, 100, 23, 1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(6, 'Grava Triturada', 'Grava triturada para concreto', 18000, 50, 23, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(7, 'Arena de Río', 'Arena de río para construcción', 15000, 75, 23, 1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(8, 'Cemento Blanco', 'Cemento blanco para acabados', 30000, 40, 23, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(9, 'Gravilla', 'Gravilla para concreto', 12000, 60, 23, 1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(10, 'Maceta de Cerámica', 'Maceta de cerámica decorativa', 25000, 20, 8, 2, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(11, 'Espejo Decorativo', 'Espejo decorativo para pared', 50000, 15, 31, 2, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(12, 'Candelabro de Hierro', 'Candelabro de hierro forjado', 75000, 10, 31, 2, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(13, 'Jarrón de Cerámica', 'Jarrón de cerámica decorativo', 35000, 18, 8, 2, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(14, 'Cuadro Decorativo', 'Cuadro decorativo para pared', 40000, 12, 31, 2, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(15, 'Cable Eléctrico THW', 'Cable eléctrico THW calibre 12', 8000, 100, 7, 3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(16, 'Caja de Breakers', 'Caja de breakers para 12 circuitos', 120000, 20, 17, 3, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(17, 'Interruptor Sencillo', 'Interruptor sencillo para luz', 5000, 50, 7, 3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(18, 'Tomacorriente Doble', 'Tomacorriente doble para interiores', 7000, 40, 7, 3, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(19, 'Caja de Seguridad', 'Caja de seguridad para exteriores', 80000, 15, 17, 3, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(20, 'Inodoro Elongado', 'Inodoro elongado de dos piezas', 250000, 10, 1, 4, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(21, 'Lavamanos Pedestal', 'Lavamanos pedestal de cerámica', 180000, 8, 1, 4, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(22, 'Grifería Monomando', 'Grifería monomando para lavamanos', 95000, 15, 11, 4, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(23, 'Regadera Cuadrada', 'Regadera cuadrada de ducha', 120000, 12, 11, 4, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(24, 'Tina de Baño', 'Tina de baño de fibra de vidrio', 350000, 5, 1, 4, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(25, 'Tijeras de Podar', 'Tijeras de podar para jardinería', 25000, 20, 3, 5, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(29, 'Cortadora de Césped', 'Cortadora de césped a gasolina', 450000, 5, 3, 5, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(30, 'Ladrillo Rojo', 'Ladrillo rojo para construcción', 800, 1000, 14, 6, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(31, 'Bloque de Cemento', 'Bloque de cemento para muros', 2500, 500, 14, 6, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(32, 'Adoquín de Arcilla', 'Adoquín de arcilla para pisos', 1200, 800, 14, 6, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(33, 'Ladrillo Hueco', 'Ladrillo hueco para muros divisorios', 1000, 700, 14, 6, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(34, 'Bloque de Concreto', 'Bloque de concreto para cimentación', 3000, 400, 14, 6, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(35, 'Martillo de Uña', 'Martillo de uña para carpintería', 18000, 25, 3, 7, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(36, 'Alicate de Corte', 'Alicate de corte para electricidad', 25000, 20, 3, 7, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(40, 'Pintura Vinílica Blanca', 'Pintura vinílica blanca para interiores', 45000, 50, 9, 8, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(41, 'Pintura Acrílica Roja', 'Pintura acrílica roja para exteriores', 60000, 40, 9, 8, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(42, 'Pintura Anticorrosiva', 'Pintura anticorrosiva para metales', 75000, 30, 9, 8, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(43, 'Pintura Epóxica', 'Pintura epóxica para pisos', 90000, 25, 9, 8, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(44, 'Pintura Tráfico', 'Pintura para tráfico y señalización', 55000, 35, 9, 8, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(45, 'Abono Orgánico', 'Abono orgánico para plantas', 12000, 30, 4, 9, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(46, 'Fertilizante Líquido', 'Fertilizante líquido para plantas', 18000, 25, 13, 9, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(47, 'Planta de Interior', 'Planta de interior para decoración', 25000, 20, 4, 9, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(48, 'Árbol Frutales', 'Árbol frutal para jardín', 35000, 15, 4, 9, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(49, 'Tierra Vegetal', 'Tierra vegetal para jardinería', 10000, 40, 4, 9, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(50, 'Tubo PVC 1/2\"', 'Tubo PVC de 1/2\" para agua potable', 5000, 100, 29, 10, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(51, 'Codo PVC 90°', 'Codo PVC de 90° para tuberías', 1500, 80, 29, 10, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(52, 'Unión PVC', 'Unión PVC para tuberías', 2000, 70, 29, 10, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(53, 'Tubo CPVC 1\"', 'Tubo CPVC de 1\" para agua caliente', 12000, 50, 29, 10, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(54, 'Válvula de Bola', 'Válvula de bola para tuberías', 8000, 60, 29, 10, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(55, 'Tubo Galvanizado 1/2\"', 'Tubo galvanizado de 1/2\" para instalaciones', 12000, 80, 29, 11, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(56, 'Codo Galvanizado 90°', 'Codo galvanizado de 90° para tuberías', 3000, 60, 29, 11, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(57, 'Tapón Macho Galvanizado', 'Tapón macho galvanizado para tuberías', 2500, 50, 29, 11, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(58, 'Abrazadera Metálica', 'Abrazadera metálica para sujeción de tuberías', 1500, 100, 29, 11, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(59, 'Tubo Flexible Corrugado', 'Tubo flexible corrugado para instalaciones eléctricas', 8000, 70, 29, 11, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(60, 'Tubo Flexible Corrugado dimensionado', 'Tubo flexible corrugado dimensionado para instalaciones eléctricas', 10000, 100, 28, 5, 1, 1, '0000-00-00 00:00:00', '2024-05-18 18:50:40', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `Descripcion` varchar(255) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 0,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre`, `Descripcion`, `estado`, `fecha_creacion`) VALUES
(1, 'Usuario', 'Usuario tipo cliente.', 1, '0000-00-00 00:00:00'),
(2, 'Jefe', 'Encargado de la ventas y atencion al cliente.', 1, '0000-00-00 00:00:00'),
(3, 'Sup', 'Supervisor, pagos realiazados. ventas y  despachos.', 1, '0000-00-00 00:00:00'),
(4, 'Admin', 'Administrador de  usuarios y privilegios.', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategoria`
--

CREATE TABLE `subcategoria` (
  `id_scat` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 0,
  `id_usr` int(11) NOT NULL,
  `id_cat` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `subcategoria`
--

INSERT INTO `subcategoria` (`id_scat`, `nombre`, `estado`, `id_usr`, `id_cat`, `fecha_creacion`) VALUES
(1, 'manuales', 1, 2, 1, '0000-00-00 00:00:00'),
(2, 'eléctricas', 1, 2, 1, '0000-00-00 00:00:00'),
(3, ' Cemento y agregados', 1, 2, 2, '0000-00-00 00:00:00'),
(4, 'Ladrillos y bloques', 1, 2, 2, '0000-00-00 00:00:00'),
(5, 'Tuberías y accesorios', 1, 2, 3, '0000-00-00 00:00:00'),
(6, 'Cables y Seguridad', 1, 2, 3, '0000-00-00 00:00:00'),
(7, 'Herramientas de jardinería', 1, 2, 4, '0000-00-00 00:00:00'),
(8, 'Plantas y abonos', 1, 2, 4, '0000-00-00 00:00:00'),
(9, 'Tuberías, accesorios varios ', 1, 2, 5, '0000-00-00 00:00:00'),
(10, 'Grifería y sanitarios', 1, 2, 5, '0000-00-00 00:00:00'),
(11, 'Pinturas', 1, 2, 6, '0000-00-00 00:00:00'),
(12, 'Artículos de decoración', 1, 2, 6, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_entrega`
--

CREATE TABLE `tipo_entrega` (
  `id_tipo_entrega` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usr` int(11) NOT NULL,
  `nombre` varchar(64) DEFAULT NULL,
  `apellido` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `rut` varchar(10) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  `password` varchar(64) DEFAULT NULL,
  `id_rol` int(11) NOT NULL DEFAULT 1,
  `activo` tinyint(4) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usr`, `nombre`, `apellido`, `rut`, `direccion`, `telefono`, `correo_electronico`, `password`, `id_rol`, `activo`, `fecha_creacion`) VALUES
(1, 'Matias', 'Roman', '0', 'los pajaritos 123', '987654321', 'mati.roman@duocuc.cl', '$2b$10$YCivuM9s.9CNpDG0htYRBuVMRfhO/GBNmNazQ0lGWh2U.oJnypc5a', 1, 1, '0000-00-00 00:00:00'),
(2, 'Claudio', 'Sanchez', '13499547-5', 'Diagonal Los  Castaños 5837 ', '986469527', 'cla.sanchezt@duocuc.cl', '$2b$10$YCivuM9s.9CNpDG0htYRBuVMRfhO/GBNmNazQ0lGWh2U.oJnypc5a', 4, 1, '0000-00-00 00:00:00'),
(3, 'Ernesto', 'Prieto', '13320316-5', 'Los Pajaritos 325', '913320316', 'ernesto.prieto@duocuc.cl', '$2b$10$vfQrLsc80eV3II/c4zVJ/uhFYj76QZlluFXfik5VleygvTm3G7lki', 3, 1, '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_cat`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `FK1_id_usr_usuario` (`id_usr`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id_detalle_pedido`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `estado_pago`
--
ALTER TABLE `estado_pago`
  ADD PRIMARY KEY (`id_estadopago`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id_ma`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`) USING BTREE,
  ADD KEY `FK1_id_usr_usuario` (`id_usr`) USING BTREE;

--
-- Indices de la tabla `metodo_pago`
--
ALTER TABLE `metodo_pago`
  ADD PRIMARY KEY (`id_mpago`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_estadopago` (`id_estadopago`),
  ADD KEY `id_mpago` (`id_mpago`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id_pedido`) USING BTREE,
  ADD KEY `id_mpago` (`id_mpago`) USING BTREE,
  ADD KEY `id_tipo_entrega` (`id_tipo_entrega`) USING BTREE,
  ADD KEY `id_usr` (`id_usr`) USING BTREE;

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `FK1_id_cat_categoria` (`id_scat`) USING BTREE,
  ADD KEY `FK1_id_ma_marca_producto` (`id_ma`),
  ADD KEY `FK3_id_usr_usuario_producto` (`id_usr`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`id_scat`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`) USING BTREE,
  ADD KEY `FK1_id_cat_categoria` (`id_cat`),
  ADD KEY `FK2_id_usr_usuario` (`id_usr`);

--
-- Indices de la tabla `tipo_entrega`
--
ALTER TABLE `tipo_entrega`
  ADD PRIMARY KEY (`id_tipo_entrega`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usr`) USING BTREE,
  ADD KEY `FK1_id_rol_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_cat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id_detalle_pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estado_pago`
--
ALTER TABLE `estado_pago`
  MODIFY `id_estadopago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id_ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `metodo_pago`
--
ALTER TABLE `metodo_pago`
  MODIFY `id_mpago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
  MODIFY `id_pago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `id_scat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tipo_entrega`
--
ALTER TABLE `tipo_entrega`
  MODIFY `id_tipo_entrega` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `FK1_id_usr_usuario` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `detalle_pedido_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  ADD CONSTRAINT `detalle_pedido_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

--
-- Filtros para la tabla `marca`
--
ALTER TABLE `marca`
  ADD CONSTRAINT `marca_ibfk_1` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pago`
--
ALTER TABLE `pago`
  ADD CONSTRAINT `pago_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  ADD CONSTRAINT `pago_ibfk_2` FOREIGN KEY (`id_estadopago`) REFERENCES `estado_pago` (`id_estadopago`),
  ADD CONSTRAINT `pago_ibfk_3` FOREIGN KEY (`id_mpago`) REFERENCES `metodo_pago` (`id_mpago`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK3_id_usr_usuario_pedido` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`id_mpago`) REFERENCES `metodo_pago` (`id_mpago`),
  ADD CONSTRAINT `pedido_ibfk_3` FOREIGN KEY (`id_tipo_entrega`) REFERENCES `tipo_entrega` (`id_tipo_entrega`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `FK1_id_ma_marca_producto` FOREIGN KEY (`id_ma`) REFERENCES `marca` (`id_ma`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK2_id_scat_subcategoria_producto` FOREIGN KEY (`id_scat`) REFERENCES `subcategoria` (`id_scat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK3_id_usr_usuario_producto` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD CONSTRAINT `FK1_id_cat_categoria` FOREIGN KEY (`id_cat`) REFERENCES `categoria` (`id_cat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK2_id_usr_usuario` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK1_id_rol_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
