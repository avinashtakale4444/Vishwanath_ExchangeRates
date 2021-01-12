package com.exchangeRate;

import org.apache.log4j.Logger;

public class Log {

// Initialize Log4j logs

    public static Logger log = Logger.getLogger(Logger.class.getName());
    public static void startTestCase(String sTestCaseName) {


        log.info(sTestCaseName + "Started Execution");

    }


    public static void endTestCase(String sTestCaseName) {

        log.info(sTestCaseName + "\tEnded Execution");


    }


    public static void info(String message) {

        log.info(message);

    }

    public static void warn(String message) {

        log.warn(message);

    }

    public static void error(String message) {

        log.error(message);

    }

    public static void fatal(String message) {

        log.fatal(message);

    }

    public static void debug(String message) {

        log.debug(message);

    }

}

