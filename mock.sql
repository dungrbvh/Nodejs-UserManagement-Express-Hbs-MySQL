INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'common', '2023-03-01 05:00');
INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'common', '2023-05-01 05:00');
INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'diet', '2023-03-01 05:00');
INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'diet', '2023-05-01 05:00');
INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'beauty', '2023-03-01 05:00');
INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'beauty', '2023-05-01 05:00');
INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'health', '2023-03-01 05:00');
INSERT INTO `healthapp`.`public_info` (description, type, add_date) VALUES ('魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', 'health', '2023-05-01 05:00');

### DIET #####
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Sandwich', 'Morning', '2023-05-21');
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Sandwich', 'Morning', '2023-05-20');
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Bentou', 'Lunch', '2023-05-21');
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Bread and Sausage', 'Lunch', '2023-05-20');
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Washoku', 'Dinner', '2023-05-21');
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Yakiniku', 'Dinner', '2023-05-20');
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Ramen', 'Snack', '2023-05-21');
INSERT INTO `healthapp`.`diet` (user_id, food_name, type, add_date) VALUES (1, 'Icecream', 'Dinner', '2023-05-20');


### DIARY ###
INSERT INTO `healthapp`.`diary` (user_id, text, add_date) VALUES (1, '私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2023-05-21 05:35');
INSERT INTO `healthapp`.`diary` (user_id, text, add_date) VALUES (1, '私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2023-05-22 05:35');
INSERT INTO `healthapp`.`diary` (user_id, text, add_date) VALUES (1, '私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2023-05-23 05:35');
INSERT INTO `healthapp`.`diary` (user_id, text, add_date) VALUES (1, '私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2023-05-20 05:35');
INSERT INTO `healthapp`.`diary` (user_id, text, add_date) VALUES (1, '私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2023-05-19 05:35');
INSERT INTO `healthapp`.`diary` (user_id, text, add_date) VALUES (1, '私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2023-05-24 05:35');
INSERT INTO `healthapp`.`diary` (user_id, text, add_date) VALUES (1, '私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2023-05-25 05:35');

### Activity (Exercise) ###
INSERT INTO `healthapp`.`activity` (user_id, duration, calories,activity, add_date) VALUES (1, '10 mins', '26kCal','Hiking', '2023-05-20');
INSERT INTO `healthapp`.`activity` (user_id, duration, calories,activity, add_date) VALUES (1, '10 mins', '26kCal','Walking', '2023-05-21');

### Body reccords ###
INSERT INTO `healthapp`.`body_records` (user_id, health_rate, weight, date) VALUES (1, 100, 80, '2023-05-01');
INSERT INTO `healthapp`.`body_records` (user_id, health_rate, weight, date) VALUES (1, 100, 85, '2023-05-02');
