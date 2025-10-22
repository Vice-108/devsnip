CREATE TABLE `snippets` (
	`id` text PRIMARY KEY NOT NULL,
	`creator` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`language` text NOT NULL,
	`public` integer DEFAULT false NOT NULL,
	`category` text,
	`code` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
