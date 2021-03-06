
/**
 * Please modify this class to meet your needs
 * This class is not complete
 */

package com.workshare.compareservices._5_2.comparewebservice;

import java.util.logging.Logger;
import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.Action;
import javax.xml.ws.FaultAction;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 3.0.1
 * 2014-07-30T11:35:09.772+01:00
 * Generated source version: 3.0.1
 * 
 */

@javax.jws.WebService(
                      serviceName = "Comparer",
                      portName = "CompareWebServiceWCF_Chunked",
                      targetNamespace = "http://workshare.com/compareservices/1.1/comparewebservice/",
                      wsdlLocation = "http://localhost:8080/Comparer?wsdl",
                      endpointInterface = "com.workshare.compareservices._5_2.comparewebservice.IComparerChunked")
                      
public class CompareWebServiceWCF_ChunkedImpl implements IComparerChunked {

    private static final Logger LOG = Logger.getLogger(CompareWebServiceWCF_ChunkedImpl.class.getName());

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#appendFile(java.lang.String  guidFile ,)byte[]  fileChunk ,)java.lang.Long  previousBytesSent )*
     */
    public void appendFile(java.lang.String guidFile,byte[] fileChunk,java.lang.Long previousBytesSent) throws IComparerChunkedAppendFileStringFaultFaultMessage    { 
        LOG.info("Executing operation appendFile");
        System.out.println(guidFile);
        System.out.println(fileChunk);
        System.out.println(previousBytesSent);
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
        //throw new IComparerChunkedAppendFileStringFaultFaultMessage("IComparerChunked_AppendFile_StringFault_FaultMessage...");
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#authenticate(*
     */
    public void authenticate() { 
        LOG.info("Executing operation authenticate");
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#setOptionsSet(*
     */
    public void setOptionsSet() { 
        LOG.info("Executing operation setOptionsSet");
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#getVersion(*
     */
    public void getVersion() { 
        LOG.info("Executing operation getVersion");
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#getOptionsSet(*
     */
    public void getOptionsSet() { 
        LOG.info("Executing operation getOptionsSet");
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#releaseFile(java.lang.String  fileGuid )*
     */
    public void releaseFile(java.lang.String fileGuid) throws IComparerChunkedReleaseFileStringFaultFaultMessage    { 
        LOG.info("Executing operation releaseFile");
        System.out.println(fileGuid);
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
        //throw new IComparerChunkedReleaseFileStringFaultFaultMessage("IComparerChunked_ReleaseFile_StringFault_FaultMessage...");
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#releaseAll(*
     */
    public void releaseAll() { 
        LOG.info("Executing operation releaseAll");
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#benchmark(java.lang.String  guidOriginalFile ,)java.lang.String  guidModifiedFile ,)com.workshare.compareservices._5_0.comparewebservice.ResponseOptions  responseOption ,)java.lang.String  compareOptions )*
     */
    public com.workshare.compareservices._5_2.comparewebservice.PerformanceResults benchmark(java.lang.String guidOriginalFile,java.lang.String guidModifiedFile,com.workshare.compareservices._5_0.comparewebservice.ResponseOptions responseOption,java.lang.String compareOptions) throws IComparerChunkedBenchmarkStringFaultFaultMessage    { 
        LOG.info("Executing operation benchmark");
        System.out.println(guidOriginalFile);
        System.out.println(guidModifiedFile);
        System.out.println(responseOption);
        System.out.println(compareOptions);
        try {
            com.workshare.compareservices._5_2.comparewebservice.PerformanceResults _return = new com.workshare.compareservices._5_2.comparewebservice.PerformanceResults();
            _return.setComparisonTime(javax.xml.datatype.DatatypeFactory.newInstance().newDuration("-P131900150Y7M18DT7H10M53.892S"));
            _return.setModifiedConversionTime(javax.xml.datatype.DatatypeFactory.newInstance().newDuration("-P81872049Y3M8DT14H21M39.079S"));
            _return.setModifiedPreProcessingTime(javax.xml.datatype.DatatypeFactory.newInstance().newDuration("P13672799Y11M23DT3H47M52.996S"));
            _return.setOriginalConversionTime(javax.xml.datatype.DatatypeFactory.newInstance().newDuration("P255657550Y10M26DT13H24M4.570S"));
            _return.setOriginalPreProcessingTime(javax.xml.datatype.DatatypeFactory.newInstance().newDuration("P101370013Y2M19DT14H47M54.275S"));
            _return.setResultsProcessingTime(javax.xml.datatype.DatatypeFactory.newInstance().newDuration("-P89957638Y4M30DT1H1M50.340S"));
            _return.setTotalExecutionTime(javax.xml.datatype.DatatypeFactory.newInstance().newDuration("P5914968Y8M7DT21H49M5.566S"));
            return _return;
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
        //throw new IComparerChunkedBenchmarkStringFaultFaultMessage("IComparerChunked_Benchmark_StringFault_FaultMessage...");
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#compare(java.lang.String  guidOriginalFile ,)java.lang.String  guidModifiedFile ,)com.workshare.compareservices._5_0.comparewebservice.ResponseOptions  responseOption ,)java.lang.String  compareOptions )*
     */
    public com.workshare.compareservices._5_0.comparewebservice.CompareResults compare(java.lang.String guidOriginalFile,java.lang.String guidModifiedFile,com.workshare.compareservices._5_0.comparewebservice.ResponseOptions responseOption,java.lang.String compareOptions) throws IComparerChunkedCompareStringFaultFaultMessage    { 
        LOG.info("Executing operation compare");
        System.out.println(guidOriginalFile);
        System.out.println(guidModifiedFile);
        System.out.println(responseOption);
        System.out.println(compareOptions);
        try {
            com.workshare.compareservices._5_0.comparewebservice.CompareResults _return = new com.workshare.compareservices._5_0.comparewebservice.CompareResults();
            javax.xml.bind.JAXBElement<byte[]> _returnRedline = null;
            _return.setRedline(_returnRedline);
            javax.xml.bind.JAXBElement<java.lang.String> _returnRedlineMl = null;
            _return.setRedlineMl(_returnRedlineMl);
            javax.xml.bind.JAXBElement<java.lang.String> _returnSummary = null;
            _return.setSummary(_returnSummary);
            return _return;
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
        //throw new IComparerChunkedCompareStringFaultFaultMessage("IComparerChunked_Compare_StringFault_FaultMessage...");
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#initialiseFile(java.lang.String  fileID ,)java.lang.Long  sizeBytes )*
     */
    public java.lang.String initialiseFile(java.lang.String fileID,java.lang.Long sizeBytes) throws IComparerChunkedInitialiseFileStringFaultFaultMessage    { 
        LOG.info("Executing operation initialiseFile");
        System.out.println(fileID);
        System.out.println(sizeBytes);
        try {
            java.lang.String _return = "_return-1028367804";
            return _return;
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
        //throw new IComparerChunkedInitialiseFileStringFaultFaultMessage("IComparerChunked_InitialiseFile_StringFault_FaultMessage...");
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#compareEx(com.workshare.compareservices._5_0.comparewebservice.ChunkedExecuteParams  executeParams )*
     */
    public com.workshare.compareservices._5_0.comparewebservice.CompareResults compareEx(com.workshare.compareservices._5_0.comparewebservice.ChunkedExecuteParams executeParams) throws IComparerChunkedCompareExStringFaultFaultMessage    { 
        LOG.info("Executing operation compareEx");
        System.out.println(executeParams);
        try {
            com.workshare.compareservices._5_0.comparewebservice.CompareResults _return = new com.workshare.compareservices._5_0.comparewebservice.CompareResults();
            javax.xml.bind.JAXBElement<byte[]> _returnRedline = null;
            _return.setRedline(_returnRedline);
            javax.xml.bind.JAXBElement<java.lang.String> _returnRedlineMl = null;
            _return.setRedlineMl(_returnRedlineMl);
            javax.xml.bind.JAXBElement<java.lang.String> _returnSummary = null;
            _return.setSummary(_returnSummary);
            return _return;
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
        //throw new IComparerChunkedCompareExStringFaultFaultMessage("IComparerChunked_CompareEx_StringFault_FaultMessage...");
    }

    /* (non-Javadoc)
     * @see com.workshare.compareservices._5_2.comparewebservice.IComparerChunked#getCompositorVersion(*
     */
    public void getCompositorVersion() { 
        LOG.info("Executing operation getCompositorVersion");
        try {
        } catch (java.lang.Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException(ex);
        }
    }

}
