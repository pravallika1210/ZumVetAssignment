-- <pre class="line-numbers language-sql">
-- <code class="language-sql">
--
-- Database: `zumvet`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_id` int(11) NOT NULL,
  `user_name`varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_subscription` varchar(100) NOT NULL,
  `user_session_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`user_id`,`user_name`, `user_email`, `user_password`, `user_subscription`,`user_session_id`) VALUES
(1, 'Pravallika','pravallika@gmail.com', 'pass', '', ''),
(2, 'John','john@gmail.com', 'pass', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
-- </code>
-- </pre>

-- <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.js" type="text/javascript"></script>
-- <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.css" rel="stylesheet" type="text/css"/>
