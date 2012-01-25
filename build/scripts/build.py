#!/usr/bin/env python

import os
import tempfile
import sys

COMMON_FILES = [
	'lib/jquery-1.6.4.min.js',
	'lib/underscore-min.js',
	'lib/backbone-min.js',
	'DOT.js',
	'models/dot_object.js',
	'models/zombie.js',
	'collections/zombie_collection.js',
	'views/game_view.js',
	'views/zombie_view.js',
]

def merge(files):

	buffer = []

	for filename in files:
		with open(os.path.join('..', '..' ,'src', filename), 'r') as f:
			buffer.append(f.read())

	return "".join(buffer)

def output(text, filename):

	with open(os.path.join('..', '..' ,'build', filename), 'w') as f:
		f.write(text)

def buildLib(files, filename):

	text = merge(files)

	folder = ''

	filename = filename + '.js'

	print "=" * 40
	print "Compiling", filename


	output(text, folder + filename)

def main(argv=None):

	config = [
	[
	'DOT', 'includes', COMMON_FILES ],
	]

	for fname_lib, fname_inc, files in config:
			buildLib(files, fname_lib)

if __name__ == "__main__":
	main()
